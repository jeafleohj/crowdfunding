import { CampaignEvent } from 'domain/entity'
import { ICampaingEventRepository } from 'domain/repository'
import { CampaignEventEntity } from 'infrastructure/orm/typeorm/models/CampaignEvent'
import { getRepository, Repository } from 'typeorm'

export class CampaignEventRepository implements ICampaingEventRepository {
  private repository: Repository<CampaignEventEntity>
  constructor() {
    this.repository = getRepository(CampaignEventEntity)
  }
  async updateEvent(event: CampaignEvent): Promise<any> {
    let updated = await this.repository.findOne({ id: event.id }) as CampaignEventEntity
    updated = event
    return this.repository.save(updated)
  }
  async removeEvent(event: CampaignEvent): Promise<any> {
    const updated = await this.repository.findOne({ id: event.id }) as CampaignEventEntity;
    return this.repository.remove(updated)
  }

  getByCampaign(campaign: number): Promise<any> {
    let events = this.repository.find({where:[{
      campaign: campaign
    }]})
    return events
  }

  persist(payload: CampaignEvent): Promise<CampaignEvent> {
    return this.repository.save(payload)
  }

  merge(payload: Partial<CampaignEvent>): void {
    throw new Error('Method not implemented.');
  }

  remove(stageId: number): void {
    throw new Error('Method not implemented.');
  }

  getAll(): Promise<CampaignEvent[]> {
    throw new Error('Method not implemented.');
  }
}
