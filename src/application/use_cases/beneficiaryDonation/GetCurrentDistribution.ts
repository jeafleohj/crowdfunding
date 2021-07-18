async function GetCurrentDistribution(campaignId: number, repositories: MyRepository) {
const { beneficiaryDonationRepository :repository } = repositories

  let distribution = await repository.getCurrentDistribution(campaignId) as Array<{
    donationId: number,
    total: number,
  }>

  return distribution.map(el => {
    return {
      donationId: el.donationId,
      total: Number(el.total)
    }
  })
}

export {
  GetCurrentDistribution
}
