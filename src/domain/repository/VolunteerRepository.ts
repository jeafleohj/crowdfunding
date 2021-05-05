import { User } from 'domain/entity'

export interface IVolunteerRepository {
  add(rcampaignId: number, userId: number): Promise<any>
  getByCampaign(campaingId: number): Promise<any>
  getAll(): Promise<any>
}
