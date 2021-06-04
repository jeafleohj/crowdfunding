export class GiverDonation {
  id: number
  donation: number
  giver: number
  amount: number
  constructor({ giver, donation, amount } : GiverDonation ) {
    this.giver = giver
    this.donation = donation
    this.amount = amount
  }
}
