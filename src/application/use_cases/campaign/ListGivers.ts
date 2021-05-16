import { ICampaignRepository } from 'domain/repository'

const ListGivers = async (id: number,
  { campaignRepository }: { campaignRepository: ICampaignRepository })  => {
  let campaing = await campaignRepository.listGivers(id)
  return campaing.givers
}

export {
  ListGivers
}
