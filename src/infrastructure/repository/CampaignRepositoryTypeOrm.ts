import { getRepository, Repository } from 'typeorm'
import { Campaign } from 'infrastructure/orm/typeorm/models/Campaign'
import { CampaignRepository } from './../../domain/repository/CampaignRepository';

export class campaignRepository implements CampaignRepository {
  private repository: Repository<Campaign>
  constructor() {
    this.repository = getRepository(Campaign)
  }

  async persist(domain: Campaign): Promise<Campaign> {
    const new_campaign = this.repository.create(domain)
    return this.repository.save(new_campaign)
  }

  merge(domain: Campaign): void {
    throw new Error('Method not implemented.');
  }

  remove(id: number): void {
    throw new Error('Method not implemented.');
  }

  getAll(): Promise<any> {
    return this.repository.find()
  }

  async getByName(name: string): Promise<any> {
    const campaign = await this.repository.findOne({name}) as Campaign
    return campaign
  }

}
