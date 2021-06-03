import { IGiverRepository } from 'domain/repository'

const GetGiverDonations = async (giverId: number,
  { giverRepository }: { giverRepository: IGiverRepository })  => {
  let donations = await giverRepository.getGiverDonations(giverId)
  return donations
}

export {
    GetGiverDonations
}
