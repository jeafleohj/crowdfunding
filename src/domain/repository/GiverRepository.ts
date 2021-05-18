import { Giver} from 'domain/entity'

export interface IGiverRepository {
  update(giver: Giver): Promise<any>
  getById(giverId: number, campaignId: number): Promise<any>
  getByCampaign(campaignId: number): Promise<any>
}
