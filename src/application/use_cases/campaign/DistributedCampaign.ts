const DistributedCampaign = async (id: number,
  { campaignRepository }: MyRepository)  => {
    return await campaignRepository.disributedCampaign(id)
}

export {
  DistributedCampaign
}
