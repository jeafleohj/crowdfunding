import { BeneficiaryDonation } from 'domain/entity'
import { IBeneficiaryDonationRepository } from 'domain/repository'
import { BeneficiaryDonationEntity } from 'infrastructure/orm/typeorm/models/BeneficiaryDonation'
import { getRepository, Repository } from 'typeorm'

export class BeneficiaryDonationRepository implements IBeneficiaryDonationRepository {

  private repository: Repository<BeneficiaryDonationEntity>

  constructor() {
    this.repository = getRepository(BeneficiaryDonationEntity)
  }

  persist(data: Array<Partial<BeneficiaryDonation>>): Promise<any> {
    return this.repository
      .createQueryBuilder()
      .insert()
      .values(data)
      .execute()
  }

  persistMany(data: Partial<BeneficiaryDonation>[]): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  merge(data: Partial<BeneficiaryDonation>): void {
    throw new Error('Method not implemented.');
  }

  remove(id: number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  getByCampaign(id: number): Promise<any> {
    throw new Error('Method not implemented.');
  }

  getByBeneficiary(id: number): Promise<any> {
    throw new Error('Method not implemented.');
  }

  getDistribution(campaignId: number, beneficiaryId: number): Promise<any> {
    return this.repository
      .createQueryBuilder('beneficiaryDonation')
      .leftJoinAndSelect('beneficiaryDonation.donation', 'donation')
      .where("beneficiaryDonation.beneficiaryId = :beneficiaryId", { beneficiaryId })
      .andWhere("beneficiaryDonation.campaignId = :campaignId", { campaignId })
      .getMany()
  }

}
