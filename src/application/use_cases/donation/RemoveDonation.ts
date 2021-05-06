import { Donation } from 'domain/entity'
import { IDonationRepository } from 'domain/repository'

const RemoveDonation = (data: Donation,
  { donationRepository }: {donationRepository : IDonationRepository }): Promise<any> => {
  return donationRepository.removeDonation(data)
}

export {
  RemoveDonation
}
