import { ICampaignRepository } from 'domain/repository'
import { Campaign } from 'domain/entity'

const GetPublicCampaigns = ({ campaignRepository }: { campaignRepository: ICampaignRepository }): Promise<Campaign[]> => {
  return campaignRepository.getPublicCampaigns()
}

export {
  GetPublicCampaigns
}
