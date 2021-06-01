import { GiverDonation } from 'domain/entity';
import { IGiverDonationRepository } from 'domain/repository'
import { GiverDonationEntity } from 'infrastructure/orm/typeorm/models';
import { getRepository, Repository } from 'typeorm';

export class GiverDonationRepository implements IGiverDonationRepository {
  private repository: Repository<GiverDonationEntity>

  constructor() {
    this.repository = getRepository(GiverDonationEntity)
  }

  persist(giverDonation: GiverDonation): Promise<GiverDonation> {
    throw new Error('Method not implemented.');
  }
  async addMany(donation: GiverDonation[]): Promise<any> {
    const response = await this.repository.createQueryBuilder()
    .insert()
    // .into(GiverDonationEntity)
    .values(donation)
    .execute()
    return response
  }
  merge(domainUser: any): void {
    throw new Error('Method not implemented.');
  }
  remove(userId: number): void {
    throw new Error('Method not implemented.');
  }
  find(): void {
    throw new Error('Method not implemented.');
  }

}
