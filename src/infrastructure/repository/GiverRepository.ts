import { GiverEntity } from './../orm/typeorm/models/Giver';
import { Repository, getRepository } from 'typeorm';
import { Giver } from 'domain/entity';
import { IGiverRepository } from 'domain/repository';
import { CampaignEventType } from 'domain/entity/CampaignEvent';

export class GiverRepository implements IGiverRepository {
  private repository: Repository<GiverEntity>

  constructor() {
    this.repository = getRepository(GiverEntity)
  }

  async getByCampaign(campaignId: number): Promise<any> {
    const givers = await this.repository
      .createQueryBuilder("giver")
      .where("giver.campaignId = :campaignId", { campaignId: campaignId })
      .getMany()
    return givers
  }

  async getGiverDonations(giverId: number): Promise<any> {
    const donations = await this.repository
      .createQueryBuilder("giver")
      .leftJoinAndSelect("giver.giverDonations", "giverdonation")
      .leftJoinAndSelect("giverdonation.donationId", "donation")
      .where("giver.id = :giverId", { giverId: giverId })
      .getMany()
    return donations
  }

  update(giver: Giver): Promise<any> {
    throw new Error('Method not implemented.');
  }

  async getById(giverId: number, campaignId: number): Promise<any> {
    const stageRecolection = CampaignEventType.collection

    const giver = await this.repository
      .createQueryBuilder('giver')
      .innerJoinAndSelect("giver.campaign", "campaign")
      .leftJoinAndSelect("campaign.donations", "donation")
      .leftJoinAndSelect("campaign.events", "campaignEvent")
      .where("giver.id = :id", { id: giverId })
      .andWhere("campaignEvent.stage = :stage", { stage: stageRecolection })
      .getOne()
 
    return giver
  }
}