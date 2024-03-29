import { BeneficiaryDonation } from 'domain/entity'
import { StatusBeneficiaryDonation } from 'domain/entity/BeneficiaryDonation'
import { IBeneficiaryDonationRepository } from 'domain/repository'
import { BeneficiaryDonationEntity } from 'infrastructure/orm/typeorm/models/BeneficiaryDonation'
import { getRepository, Repository } from 'typeorm'

export class BeneficiaryDonationRepository implements IBeneficiaryDonationRepository {

  private repository: Repository<BeneficiaryDonationEntity>

  constructor() {
    this.repository = getRepository(BeneficiaryDonationEntity)
  }

  getDistributionByBeneficiary(beneficiaryId: number, campaignId: number): Promise<any> {
    return this.repository
      .find({
        select: [
          'donationId', 'amount'
        ],
        where: {
          beneficiaryId,
          campaignId
        },
        order:{
          campaignId: 'ASC'
        }
      })
  }

  getCurrentDistribution(campaignId: number): Promise<any> {
    return this.repository
      .createQueryBuilder()
      .select('donationId')
      .addSelect('sum(amount)', 'total')
      .groupBy('donationId')
      .where("campaignId = :id", { id: campaignId })
      .orderBy('campaignId')
      .getRawMany()
  }

  persist(data: Array<Partial<BeneficiaryDonation>>): Promise<any> {
    return this.repository
      .createQueryBuilder()
      .insert()
      .values(data)
      .execute()
  }

  updateAmount(beneficiaryId: number,donationId: number, amount: number): Promise<any> {
    return this.repository
      .update({donationId, beneficiaryId}, {amount});
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

  deliverMany(donation: BeneficiaryDonation[]): Promise<any> {
    const beneficiaryDonationsIds = donation.map(el => el.id)
    const response = this.repository.createQueryBuilder()
      .update()
      .set({ status: StatusBeneficiaryDonation.delivered })
      .whereInIds(beneficiaryDonationsIds)
      .execute()
    return response
  }

}
