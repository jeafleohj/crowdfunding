import { Beneficiary, BeneficiaryDonation } from "domain/entity"

async function CreateDistribution (
  distributions: Array<BeneficiaryDonation>,
  { beneficiaryDonationRepository: repository}: MyRepository

): Promise<any> {
  return repository.persist(distributions)
}

export {
  CreateDistribution
}
