import { Donation } from 'domain/entity/Donation';
import { ICampaignRepository } from 'domain/repository/CampaignRepository'

const CreateDonation = (data: Donation,
  { campaignRepository }: {campaignRepository : ICampaignRepository }): Promise<any> => {
  const donation = new Donation(data)
  return campaignRepository.addDonation(donation)
}

export {
  CreateDonation
}
