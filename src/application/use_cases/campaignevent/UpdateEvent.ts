import { CampaignEvent } from 'domain/entity'
import { ICampaingEventRepository } from 'domain/repository'

const UpdateEvent = ( id: number, data: Partial<CampaignEvent>,
  { campaignEventRepository }: {campaignEventRepository : ICampaingEventRepository }): Promise<any> => {
  return campaignEventRepository.merge(id,data)
}

export {
  UpdateEvent
}
