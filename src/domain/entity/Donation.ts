export class Donation {
  id: number
  name: string
  description: string
  category: string
  amountByBeneficiary: number
  campaign: number

  constructor({name,description, category, amountByBeneficiary, campaign}
              :Donation) {
    this.name = name
    this.description = description
    this.category = category
    this.amountByBeneficiary = amountByBeneficiary
    this.campaign = campaign
  }
}
