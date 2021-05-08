import { CampaingStage } from 'domain/entity'
export interface ICampaingStageRepository {
   persist(payload: CampaingStage): Promise<CampaingStage>
   merge(payload: Partial<CampaingStage>): void
   remove(stageId: number): void
   getAll(): Promise<CampaingStage[]>
}
