import { Giver } from './../../../domain/entity/Giver';
// import { Donation } from 'domain/entity'
import { ICampaignRepository } from 'domain/repository'

const CreateGiver = (data: Giver,
  { campaignRepository }: {campaignRepository : ICampaignRepository }): Promise<any> => {
  const donation = new Giver(data)
  // return campaignRepository.addDonation(donation)
}

export {
  CreateGiver
}
