export class GiverDonation {
  id: number
  donationId: number
  giverId: number
  amount: number
  constructor({ giverId, donationId, amount } : GiverDonation ) {
    this.giverId = giverId
    this.donationId = donationId
    this.amount = amount
  }
}
