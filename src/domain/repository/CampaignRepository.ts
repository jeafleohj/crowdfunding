import { Beneficiary } from 'domain/entity/Beneficiary';
import { Campaign } from 'domain/entity/Campaign'
export interface ICampaignRepository {
  persist(domain: any): Promise<any>
  merge(domain: any): void
  remove(campaignId: number): void
  getByUser(idUser:number): Promise<Campaign[]>
  getByName(name: string): Promise<Campaign>
  addBeneficiary(beneficiary: Beneficiary): Promise<any>
  listBeneficiaries(id: number): Promise<any>
}
