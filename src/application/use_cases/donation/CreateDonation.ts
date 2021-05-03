import { Donation } from 'domain/entity'
import { ICampaignRepository } from 'domain/repository'

const CreateDonation = (data: Donation,
  { campaignRepository }: {campaignRepository : ICampaignRepository }): Promise<any> => {
  const donation = new Donation(data)
  return campaignRepository.addDonation(donation)
}

export {
  CreateDonation
}
