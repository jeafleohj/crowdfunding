export interface IVolunteerRepository {
  getAll(): Promise<any>
  getByCampaign(campaingId: number): Promise<any>
}
