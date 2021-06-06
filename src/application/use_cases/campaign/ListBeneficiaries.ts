const ListBeneficiaries = async (id: number,
  { campaignRepository }: MyRepository)  => {
  let beneficiaries = await campaignRepository.listBeneficiaries(id)
  return beneficiaries
}

export {
  ListBeneficiaries
}
