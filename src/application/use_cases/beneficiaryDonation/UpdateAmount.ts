async function UpdateAmount (beneficiaryId: number,
                             donationId: number,
                             amount: number,
                             repositories: MyRepository): Promise<any> {

  const { beneficiaryDonationRepository: repository } = repositories

  return repository.updateAmount(beneficiaryId, donationId, amount)
}
export {
  UpdateAmount
}
