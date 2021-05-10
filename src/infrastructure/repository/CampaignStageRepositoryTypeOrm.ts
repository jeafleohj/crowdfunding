import { CampaignStage } from 'domain/entity'
import { ICampaingStageRepository } from 'domain/repository'
import { CampaignStageEntity } from 'infrastructure/orm/typeorm/models/CampaignStage'
import { getRepository, Repository } from 'typeorm'

export class CampaignStageRepository implements ICampaingStageRepository {
  private repository: Repository<CampaignStageEntity>
  constructor() {
    this.repository = getRepository(CampaignStageEntity)
  }

  persist(payload: CampaignStage): Promise<CampaignStage> {
    return this.repository.save(payload)
  }

  merge(payload: Partial<CampaignStage>): void {
    throw new Error('Method not implemented.');
  }

  remove(stageId: number): void {
    throw new Error('Method not implemented.');
  }

  getAll(): Promise<CampaignStage[]> {
    throw new Error('Method not implemented.');
  }
}
