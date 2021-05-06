import { ICampaignRepository } from 'domain/repository'

const ListDonations = async (id: number,
  { campaignRepository }: { campaignRepository: ICampaignRepository })  => {
  let campaing = await campaignRepository.listDonations(id)
  return campaing.donations
}

export {
  ListDonations
}
