import { getRepository, Repository } from 'typeorm'
import { CampaignEntity } from 'infrastructure/orm/typeorm/models/Campaign'
import { ICampaignRepository } from 'domain/repository/CampaignRepository'
import { Beneficiary } from 'domain/entity/Beneficiary'
import { Campaign, campaignStatus } from 'domain/entity/Campaign'
import { Donation } from 'domain/entity/Donation'
import { ErrorHandler } from 'application/error'
import { Giver } from 'domain/entity'


export class CampaignRepository implements ICampaignRepository {
  private repository: Repository<CampaignEntity>
  constructor() {
    this.repository = getRepository(CampaignEntity)
  }
  
  async getPublicCampaigns(): Promise<any> {
    const campaigns = this.repository.find({ where: [
        { status: campaignStatus.published },
        { status: campaignStatus.distribution },
        { status: campaignStatus.finalized },
      ] 
    })
    return campaigns
  }

  async addDonation(donation: Donation): Promise<any> {

    let campaign = await this.repository.findOne({
      select: [
        'id', 'name'
      ],
      where: [{id: donation.campaign}],
      join: {
        alias: 'campaign',
        leftJoinAndSelect: {
          donations: 'campaign.donations',
        },
      }
    }) as CampaignEntity

    if (campaign.donations === undefined) {
      campaign.donations = [donation]
    } else {
      campaign.donations.push(donation)
    }

    return this.repository.save(campaign)
  }

  async addGiver(giver: Giver): Promise<any> {
    let campaign = await this.repository.findOne({
      select: [
        'id', 'name'
      ],
      where: [{id: giver.campaign}],
      join: {
        alias: 'campaign',
        leftJoinAndSelect: {
          givers: 'campaign.givers',
        },
      }
    }) as CampaignEntity

    if (campaign.givers === undefined) {
      campaign.givers = [giver]
    } else {
      campaign.givers.push(giver)
    }

    let response = await this.repository.save(campaign)
    const length = response.givers.length || 0
    return {
      giverId: response.givers[length-1].id,
      campaign: {
        id: campaign.id,
        name: campaign.name,
      }
    }
  }

  listGivers(id: number): Promise<any> {
    throw new Error('Method not implemented.')
  }
  async listDonations(id: number): Promise<any> {
    let campaign = await this.repository.findOne({ id })
    console.log(campaign)
    return campaign
  }

  async listBeneficiaries(id: number): Promise<any> {
    let campaign = await this.repository.findOne({
      select: [
        'id', 'name'
      ],
      where: [{id: id}],
      join: {
        alias: 'campaign',
        leftJoinAndSelect: {
          beneficiaries: 'campaign.beneficiaries',
        },
      }
    })
    return campaign
  }

  async addBeneficiary(data: Beneficiary): Promise<any> {
    let campaign = await this.listBeneficiaries(Number(data.campaign))
    if (campaign.beneficiaries === undefined) {
      campaign.beneficiaries = [data]
    } else {
      campaign.beneficiaries.push(data)
    }
    return this.repository.save(campaign)
  }

  async removeBeneficiary(data: Beneficiary): Promise<any> {
    let campaign = await this.listBeneficiaries(Number(data.campaign))
    if (campaign.beneficiaries === undefined) {
      throw new Error('Lista de beneficiarios vacía.');
    } else {
      let beneficiaries = campaign.beneficiaries as Array<Beneficiary>
      let removeIndex = beneficiaries.map(item => { return item.id }).indexOf(data.id);
      campaign.beneficiaries.splice(removeIndex,1)
    }
    return this.repository.save(campaign)
  }

  getByUser(idUser: number): Promise<any> {
    return this.repository.find({ where: { user: idUser } })
  }

  async persist(domain: CampaignEntity): Promise<CampaignEntity> {
    const new_campaign = this.repository.create(domain)
    return this.repository.save(new_campaign)
  }

  async merge(payload: Partial<Campaign>): Promise<CampaignEntity> {
    let campaign = await this.repository.findOne(payload.id as number) as CampaignEntity
    if ( campaign.beneficiaries.length === 0  ) {
      throw new ErrorHandler({
        status: 401,
        message: 'Se tiene que agregar beneficiarios a la campaña',
      })
    }
    campaign.image_url = payload.image_url
    campaign.description = payload.description || ''
    campaign.status = campaignStatus.published
    return this.repository.save(campaign)
  }

  remove(id: number): void {
    throw new Error('Method not implemented.');
  }

  async getByName(name: string): Promise<any> {
    const campaign = await this.repository.findOne({ name }) as CampaignEntity
    return campaign
  }

  async getById(id: number): Promise<any> {
    const campaign = await this.repository.findOne({ id }) as CampaignEntity
    return campaign
  }

}
