import { ICampaignRepository } from 'domain/repository'
import { Campaign } from 'domain/entity'

const GetCampaignById = (id: number, { campaignRepository }: { campaignRepository: ICampaignRepository }): Promise<Campaign> => {
  return campaignRepository.getById(id)
}

export {
  GetCampaignById
}
