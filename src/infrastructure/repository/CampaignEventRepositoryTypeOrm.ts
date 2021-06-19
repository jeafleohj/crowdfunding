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

  getEventById(id: number): Promise<any> {
    let event = this.repository.findOne(id)
    return event
  }

  persist(payload: CampaignEvent): Promise<CampaignEvent> {
    return this.repository.save(payload)
  }

  merge(eventId: number, payload: Partial<CampaignEvent>): Promise<any> {
    console.log(payload)
    return this.repository.createQueryBuilder()
    .update()
    .set(payload)
    .where('id = :id', {id: eventId})
    .execute()
}

  remove(stageId: number): void {
    throw new Error('Method not implemented.');
  }

  getAll(): Promise<CampaignEvent[]> {
    throw new Error('Method not implemented.');
  }
}
