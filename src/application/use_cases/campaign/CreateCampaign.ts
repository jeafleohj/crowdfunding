import { Campaign } from 'domain/entity'

const CreateCampaign = (data: Campaign,
  { campaignRepository }: MyRepository): Promise<Campaign> => {
  const campaign = new Campaign(data)
  return campaignRepository.persist(campaign)
}

export {
  CreateCampaign
}
