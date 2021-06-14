import { IGiverRepository } from 'domain/repository'

const GetGiverCampaigns = async (email: string,
  { giverRepository }: { giverRepository: IGiverRepository })  => {
  let donations = await giverRepository.getGiverCampaigns(email)
  return donations
}

export {
  GetGiverCampaigns
}
