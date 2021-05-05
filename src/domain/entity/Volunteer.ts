export class Volunteer {
  campaignId: number
  userId: number
  constructor({campaignId, userId}: Volunteer) {
    this.campaignId = campaignId
    this.userId = userId
  }
}
