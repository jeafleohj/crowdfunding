import { CampaingStage } from 'domain/entity';
import { ICampaingStageRepository } from 'domain/repository'
import { getRepository, Repository } from 'typeorm'

export class CampaignStageRepository implements ICampaingStageRepository {
  private repository: Repository<CampaingStage>
  constructor() {
    this.repository = getRepository(CampaingStage)
  }

  persist(payload: CampaingStage): Promise<CampaingStage> {
    return this.repository.save(payload)
  }

  merge(payload: Partial<CampaingStage>): void {
    throw new Error('Method not implemented.');
  }

  remove(stageId: number): void {
    throw new Error('Method not implemented.');
  }

  getAll(): Promise<CampaingStage[]> {
    throw new Error('Method not implemented.');
  }
}
