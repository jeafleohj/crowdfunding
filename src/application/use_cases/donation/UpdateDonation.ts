import { Donation } from 'domain/entity'
import { IDonationRepository } from 'domain/repository'

const UpdateDonation = (data: Donation,
  { donationRepository }: {donationRepository : IDonationRepository }): Promise<any> => {
  return donationRepository.updateDonation(data)
}

export {
  UpdateDonation
}
