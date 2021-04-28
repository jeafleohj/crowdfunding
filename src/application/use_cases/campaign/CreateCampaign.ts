import { ICampaignRepository } from 'domain/repository/CampaignRepository'
import { CampaignData, Campaign } from 'domain/entity/Campaign'

const CreateCampaign = (data: CampaignData,
  { campaignRepository }: { campaignRepository: ICampaignRepository }): Promise<Campaign> => {
  const campaign = new Campaign(data)
  return campaignRepository.persist(campaign)
}

export {
  CreateCampaign
}
