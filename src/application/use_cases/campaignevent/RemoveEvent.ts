import { CampaignEvent } from 'domain/entity'
import { ICampaingEventRepository } from 'domain/repository'

const RemoveEvent = (data: CampaignEvent,
  { campaignEventRepository }: {campaignEventRepository : ICampaingEventRepository }): Promise<any> => {
  return campaignEventRepository.removeEvent(data)
}

export {
  RemoveEvent
}
