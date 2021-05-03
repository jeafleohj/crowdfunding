export class Volunteer {
  campaign: number
  user: number
  constructor({campaign, user}: Volunteer) {
    this.campaign = campaign
    this.user = user
  }
}
