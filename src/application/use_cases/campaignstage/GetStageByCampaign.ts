import { CampaignStage } from 'domain/entity'
import { ICampaingStageRepository } from 'domain/repository'

export async function GetStageByCampaign (campaignId: number,
  {campaignStageRepository} : { campaignStageRepository : ICampaingStageRepository}
) : Promise<CampaignStage[]>  {
  return campaignStageRepository.getByCampaign(campaignId)
}
