import { CampaignEvent } from 'domain/entity'
export interface ICampaingEventRepository {
  persist(payload: CampaignEvent): Promise<CampaignEvent>
  merge(payload: Partial<CampaignEvent>): void
  remove(stageId: number): void
  getAll(): Promise<CampaignEvent[]>
  getByCampaign(campaignId: number): Promise<CampaignEvent[]>
}
