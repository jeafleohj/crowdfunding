import { BeneficiaryCampaign } from "domain/entity"

async function UpdateBeneficiaryToCampaign(
  payload: Partial<BeneficiaryCampaign>,
  { beneficiaryCampaignRepository: repository }: MyRepository
): Promise<any> {
  return repository.merge(payload)
}
export {
  UpdateBeneficiaryToCampaign
}
