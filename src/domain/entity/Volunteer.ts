import {
  Campaign,
  User,
} from '.'

export class Volunteer {
  campaignId: number
  userId: number
  volunteerId: number;
  user!: User
  campaign!: Campaign

  constructor(campaignId: number, userId: number) {
    this.campaignId = campaignId
    this.userId = userId
  }
}
