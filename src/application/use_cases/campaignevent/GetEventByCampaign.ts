import { CampaignEvent } from 'domain/entity'
import { ICampaingEventRepository } from 'domain/repository'

export async function GetEventByCampaign (campaignId: number,
  {campaignEventRepository} : { campaignEventRepository : ICampaingEventRepository }
) : Promise<CampaignEvent[]>  {
  return campaignEventRepository.getByCampaign(campaignId)
}
