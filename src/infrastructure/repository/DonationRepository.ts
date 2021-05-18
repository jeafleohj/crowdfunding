import { Donation } from './../../domain/entity/Donation';
import { DonationEntity } from './../orm/typeorm/models/Donation';
import { IDonationRepository } from './../../domain/repository/DonationRepository';
import { getRepository, Repository } from 'typeorm'


export class DonationRepository implements IDonationRepository {
  private repository: Repository<DonationEntity>
  constructor() {
    this.repository = getRepository(DonationEntity)
  }

  async getByCampaign(campaignId: number): Promise<Donation[]> {
    const donations = await this.repository
    .createQueryBuilder("donation")
    .where("donation.campaignId = :campaignId", { campaignId: campaignId})
    .getMany()
    console.log(donations)
    return donations
  }

  persist(donation: Donation): Promise<any> {
    const newDonation = this.repository.create(donation)
    return this.repository.save(newDonation)
  }

  merge(donation: Donation): void {
    throw new Error("Method not implemented.");
  }

  remove(id: number): void {
    throw new Error("Method not implemented.");
  }

  async updateDonation(donation: Donation): Promise<any> {
    let updated = await this.repository.findOne({ id: donation.id }) as DonationEntity
    updated = donation
    return this.repository.save(updated)
  }

  async removeDonation(donation: Donation): Promise<any> {
    const updated = await this.repository.findOne({ id: donation.id }) as DonationEntity;
    return this.repository.remove(updated)
  }

}
