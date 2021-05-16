import {
  Beneficiary,
  Campaign,
  Donation,
  Giver,
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
  addGiver(giver: Giver): Promise<any>
  listBeneficiaries(id: number): Promise<any>
  listDonations(id: number): Promise<any>
  listGivers(id: number): Promise<any>
  removeBeneficiary(beneficiary: Beneficiary): Promise<any>
}
