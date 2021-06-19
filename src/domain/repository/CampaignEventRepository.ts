import { CampaignEvent } from 'domain/entity'
export interface ICampaingEventRepository {
  persist(payload: CampaignEvent): Promise<CampaignEvent>
  merge(eventId:number, payload: Partial<CampaignEvent>): Promise<any>
  remove(stageId: number): void
  updateEvent(event: CampaignEvent): Promise<any>
  removeEvent(event: CampaignEvent): Promise<any>
  getAll(): Promise<CampaignEvent[]>
  getByCampaign(campaignId: number): Promise<CampaignEvent[]>
  getEventById(id: number): Promise<any>
}
