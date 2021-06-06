import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { DonationEntity } from '.'
import { SharedProps } from './SharedProps'

@Entity('beneficiary_donation')
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
