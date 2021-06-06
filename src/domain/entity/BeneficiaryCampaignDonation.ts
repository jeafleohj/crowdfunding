export class BeneficiaryCampaignDonation {
  id: number
  beneficiaryId: number
  campaignId: number
  donationId: number
  amount: number

  constructor(bcd : Partial<BeneficiaryCampaignDonation>) {
    this.id = bcd.id || 0
    this.beneficiaryId = bcd.beneficiaryId || 0
    this.campaignId = bcd.campaignId || 0
    this.donationId = bcd.donationId || 0
    this.amount = bcd.amount || -1
  }
}
