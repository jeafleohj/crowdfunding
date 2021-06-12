import { Campaign } from "domain/entity"

const CloseCampaign = async (data: Partial<Campaign>,
  { campaignRepository }: MyRepository)  => {
    return await campaignRepository.closeCampaign(data)
}

export {
  CloseCampaign
}
