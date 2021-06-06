async function AddBeneficiaryToCampaign (
  beneficiaryId: number,
  campaignId: number,
  { beneficiaryCampaignRepository: repository }: MyRepository
): Promise<any> {
  return repository.persist(beneficiaryId, campaignId)
}
export {
  AddBeneficiaryToCampaign
}
