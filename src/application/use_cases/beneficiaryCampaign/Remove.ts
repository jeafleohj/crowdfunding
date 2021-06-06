async function RemoveBeneficiaryFromCampaign (
  beneficiaryId: number,
  campaignId: number,
  { beneficiaryCampaignRepository: repository }: MyRepository
): Promise<any> {
  return repository.remove(beneficiaryId, campaignId)
}
export {
  RemoveBeneficiaryFromCampaign
}
