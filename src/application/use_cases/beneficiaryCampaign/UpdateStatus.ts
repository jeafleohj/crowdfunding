import { StatusBeneficiaryCampaign } from 'domain/entity/BeneficiaryCampaign'

async function UpdateBeneficiaryStatus(
  beneficiaryId: number,
  campaignId: number,
  status: StatusBeneficiaryCampaign,
  repositories :MyRepository) {
  const { beneficiaryCampaignRepository: respository} = repositories

  return respository.updateStatus(beneficiaryId, campaignId, status)
}

export {
  UpdateBeneficiaryStatus
}
