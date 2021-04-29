import { Donation } from './../../domain/entity/Donation';
import { DonationEntity } from './../orm/typeorm/models/Donation';
import { IDonationRepository } from './../../domain/repository/DonationRepository';
import { getRepository, Repository } from 'typeorm'


export class DonationRepository implements IDonationRepository {
  private repository: Repository<DonationEntity>
  constructor() {
    this.repository = getRepository(DonationEntity)
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

  getAll(): Promise<Donation[]> {
    throw new Error("Method not implemented.");
  }
}
