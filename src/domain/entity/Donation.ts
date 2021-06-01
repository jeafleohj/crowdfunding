export class Donation {
  id: number
  name: string
  description: string
  category: string
  amountByBeneficiary: number
  collected: number
  total: number
  campaign: number

  constructor({name,description, category, amountByBeneficiary, campaign, total}
              :Donation) {
    this.name = name
    this.description = description
    this.category = category
    this.amountByBeneficiary = amountByBeneficiary
    this.campaign = campaign
    this.total = total
    this.collected = 0
  }
}
