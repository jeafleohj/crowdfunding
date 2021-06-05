import { GiverEntity } from './Giver';
import { Column, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { CampaignEntity, DonationEntity } from '.'
import { SharedProps } from './SharedProps'
import { giverDonationStatus } from 'domain/entity/GiverDonation';

@Entity('giver_donation')
export class GiverDonationEntity extends SharedProps {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => DonationEntity, donation => donation.giverDonations )
  @JoinTable()
  donation: number

  @ManyToOne(() => GiverEntity, giver => giver.giverDonations)
  @JoinTable()
  giver: number

  @Column()
  amount: number

  @Column({
    type: 'enum',
    enum: giverDonationStatus,
    default: giverDonationStatus.initial
  })
  status: giverDonationStatus
}
