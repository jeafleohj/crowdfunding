import { CampaignEvent } from 'domain/entity'
export interface ICampaingEventRepository {
  persist(payload: CampaignEvent): Promise<CampaignEvent>
  merge(payload: Partial<CampaignEvent>): void
  remove(stageId: number): void
  updateEvent(event: CampaignEvent): Promise<any>
  removeEvent(event: CampaignEvent): Promise<any>
  getAll(): Promise<CampaignEvent[]>
  getByCampaign(campaignId: number): Promise<CampaignEvent[]>
}
