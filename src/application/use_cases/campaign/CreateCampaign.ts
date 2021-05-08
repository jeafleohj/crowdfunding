import { ICampaignRepository } from 'domain/repository'
import { Campaign } from 'domain/entity'

const CreateCampaign = (data: Campaign,
  { campaignRepository }: { campaignRepository: ICampaignRepository }): Promise<Campaign> => {
  const campaign = new Campaign(data)
  return campaignRepository.persist(campaign)
}

export {
  CreateCampaign
}
