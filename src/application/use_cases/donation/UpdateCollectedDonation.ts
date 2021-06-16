const UpdateCollectedDonation = (id: number, amount: number,
                        { donationRepository }: MyRepository): Promise<any> => {
  return donationRepository.updateCollectedDonation(id, amount)
}

export {
  UpdateCollectedDonation
}
