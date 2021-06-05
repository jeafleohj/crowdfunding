import { Giver} from 'domain/entity'

export interface IGiverRepository {
  update(giverId: number, giver: Partial <Giver>): Promise<any>
  getById(giverId: number, campaignId: number): Promise<any>
  getByCampaign(campaignId: number): Promise<any>
  getGiverDonations(giverId: number): Promise<any>
}
