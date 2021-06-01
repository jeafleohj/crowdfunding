import { GiverEntity } from './Giver';
import { Column, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { CampaignEntity, DonationEntity } from '.'
import { SharedProps } from './SharedProps'

@Entity('giver_donation')
export class GiverDonationEntity extends SharedProps {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => DonationEntity, donation => donation.giverDonations )
  @JoinTable()
  donationId: number

  @ManyToOne(() => GiverEntity, giver => giver.giverDonations)
  @JoinTable()
  giverId: number
  
  @Column()
  amount: number
  
}
