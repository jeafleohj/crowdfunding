import { Campaign } from 'domain/entity/Campaign'
export interface CampaignRepository {
   persist(domain: any): Promise<any>
   merge(domain: any): void
   remove(campaignId: number): void
   getAll(): Promise<Campaign[]>
   getByName(name: string): Promise<Campaign>
}
