import { BeneficiaryDonation } from "domain/entity"

export function DeliverDonations ( donations: Array<BeneficiaryDonation>,
  { beneficiaryDonationRepository }: MyRepository)
: Promise<any> {
return beneficiaryDonationRepository.deliverMany(donations)
}

