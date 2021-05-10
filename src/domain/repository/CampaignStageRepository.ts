import { CampaignStage } from 'domain/entity'
export interface ICampaingStageRepository {
  persist(payload: CampaignStage): Promise<CampaignStage>
  merge(payload: Partial<CampaignStage>): void
  remove(stageId: number): void
  getAll(): Promise<CampaignStage[]>
  getByCampaign(campaignId: number): Promise<CampaignStage[]>
}
