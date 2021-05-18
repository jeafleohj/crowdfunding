import { CampaignEvent } from 'domain/entity'
import { ICampaingEventRepository } from 'domain/repository'

const UpdateEvent = (data: CampaignEvent,
  { campaignEventRepository }: {campaignEventRepository : ICampaingEventRepository }): Promise<any> => {
  return campaignEventRepository.updateEvent(data)
}

export {
  UpdateEvent
}
