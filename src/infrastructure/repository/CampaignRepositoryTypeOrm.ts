import { getRepository, Repository } from 'typeorm'
import { CampaignEntity } from 'infrastructure/orm/typeorm/models/Campaign'
import { ICampaignRepository } from 'domain/repository/CampaignRepository'
import { Beneficiary } from 'domain/entity/Beneficiary'
import { Campaign } from 'domain/entity/Campaign';


export class CampaignRepository implements ICampaignRepository {
  private repository: Repository<CampaignEntity>
  constructor() {
    this.repository = getRepository(CampaignEntity)
  }
  getByUser(idUser: number): Promise<any> {
    console.log('cualquier cosa')
    return this.repository.find({ where: { user: idUser } })
  }

  async listBeneficiaries(id: number): Promise<any> {
    let campaign = this.repository.findOne({ id })
    return campaign
  }

  async addBeneficiary(data: Beneficiary): Promise<any> {
    let campaign = await this.repository.findOne({ id: data.campaign }) as CampaignEntity
    if (campaign.beneficiaries === undefined) {
      campaign.beneficiaries = [data]
    } else {
      campaign.beneficiaries.push(data)
    }
    return this.repository.save(campaign)
  }

  async persist(domain: CampaignEntity): Promise<CampaignEntity> {
    const new_campaign = this.repository.create(domain)
    return this.repository.save(new_campaign)
  }

  merge(domain: Campaign): void {
    throw new Error('Method not implemented.');
  }

  remove(id: number): void {
    throw new Error('Method not implemented.');
  }

  async getByName(name: string): Promise<any> {
    const campaign = await this.repository.findOne({ name }) as CampaignEntity
    return campaign
  }

}
