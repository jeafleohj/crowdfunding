import { IGiverRepository } from 'domain/repository'

const ListGivers = async (campaignId: number,
  { giverRepository }: { giverRepository: IGiverRepository })  => {
  let donations = await giverRepository.getByCampaign(campaignId)
  return donations
}

export {
  ListGivers
}
