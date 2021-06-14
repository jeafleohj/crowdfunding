import { ICampaingEventRepository } from 'domain/repository'

const GetEventById = (id: number,
  { campaignEventRepository }: {campaignEventRepository : ICampaingEventRepository }): Promise<any> => {
  return campaignEventRepository.getEventById(id)
}

export {
  GetEventById
}
