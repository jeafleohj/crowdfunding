const GetDistribution = async (campaignId: number, beneficiaryId: number,
  { beneficiaryDonationRepository }: MyRepository)  => {
  let distribution = await beneficiaryDonationRepository.getDistribution(campaignId, beneficiaryId)
  return distribution
}

export {
  GetDistribution
}
