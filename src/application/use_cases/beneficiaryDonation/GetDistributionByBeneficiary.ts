async function GetDistributionByBeneficiary(beneficiaryId:number, campaignId: number, repositories: MyRepository) {
  const { beneficiaryDonationRepository: repository } = repositories
  let distribution = await repository.getDistributionByBeneficiary(beneficiaryId, campaignId) as Array<{
    donationId: number,
    amount: number,
  }>

  return distribution.map(el=>{
    return {
      donationId: el.donationId,
      amount: el.amount,
    }
  })
}

export {
  GetDistributionByBeneficiary,
}
