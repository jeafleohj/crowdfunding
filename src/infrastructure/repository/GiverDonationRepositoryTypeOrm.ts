import { GiverDonation } from 'domain/entity';
import { IGiverDonationRepository } from 'domain/repository'

export class GiverDonationRepository implements IGiverDonationRepository {
    persist(giverDonation: GiverDonation): Promise<GiverDonation> {
        throw new Error('Method not implemented.');
    }
    addMany(donation: GiverDonation[]): Promise<GiverDonation> {
        throw new Error('Method not implemented.');
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
