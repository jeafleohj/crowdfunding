import {
  Beneficiary,
  Campaign,
  Donation,
} from 'domain/entity';

export interface ICampaignRepository {
  persist(domain: any): Promise<any>
  merge(domain: any): void
  remove(campaignId: number): void
  getByUser(idUser:number): Promise<Campaign[]>
  getByName(name: string): Promise<Campaign>
  getById(id: number): Promise<Campaign>
  addBeneficiary(beneficiary: Beneficiary): Promise<any>
  addDonation(donation: Donation): Promise<any>
  listBeneficiaries(id: number): Promise<any>
}
