const GetResults = async (id: number,
  { campaignRepository }: MyRepository)  => {
     const campaign = await campaignRepository.getResults(id)
     const beneficiaries = campaign.beneficiaryCampaign.length
     const donations = campaign.donations
     return { beneficiaries, donations }
}

export {
  GetResults
}
