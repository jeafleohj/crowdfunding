import { CampaingStage } from 'domain/entity'
import { ICampaingStageRepository } from 'domain/repository'

export async function CreateStage(
  stage: CampaingStage,
  {campaingStageRepository} : {campaingStageRepository: ICampaingStageRepository}
) : Promise<any>  {
  return campaingStageRepository.persist(stage)
}
