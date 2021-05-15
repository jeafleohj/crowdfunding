import { CampaignEvent } from 'domain/entity'
import { ICampaingEventRepository } from 'domain/repository'

export async function CreateEvent(
  stage: CampaignEvent,
  {campaignEventRepository} : { campaignEventRepository : ICampaingEventRepository}
) : Promise<any>  {
  return campaignEventRepository.persist(stage)
}
