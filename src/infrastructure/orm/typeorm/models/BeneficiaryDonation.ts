import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm'
import { DonationEntity } from '.'
import { SharedProps } from './SharedProps'

@Entity('beneficiary_donation')
@Unique('UNQ_KEYS', ['beneficiaryId', 'campaignId', 'donationId'])
export class BeneficiaryDonationEntity extends SharedProps {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  beneficiaryId: number

  @Column()
  campaignId: number

  @Column()
  donationId: number

  @Column({
    nullable: true
  })
  amount: number

  @ManyToOne(
    () => DonationEntity,
    donation => donation.beneficiaryDonation,
  )
  donation: DonationEntity

}
