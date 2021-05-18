import { IDonationRepository } from 'domain/repository'

const ListDonations = async (campaignId: number,
  { donationRepository }: { donationRepository: IDonationRepository })  => {
  let donations = await donationRepository.getByCampaign(campaignId)
  return donations
}

export {
  ListDonations
}
