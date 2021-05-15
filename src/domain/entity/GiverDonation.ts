export class GiverDonation {
  id: number
  donation_id: number
  amount: number
  constructor({ amount } : GiverDonation ) {
    this.amount = amount
  }
}
