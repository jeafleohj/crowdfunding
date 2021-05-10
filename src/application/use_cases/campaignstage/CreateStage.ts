import { CampaignStage } from 'domain/entity'
import { ICampaingStageRepository } from 'domain/repository'

export async function CreateStage(
  stage: CampaignStage,
  {campaignStageRepository} : { campaignStageRepository : ICampaingStageRepository}
) : Promise<any>  {
  return campaignStageRepository.persist(stage)
}
