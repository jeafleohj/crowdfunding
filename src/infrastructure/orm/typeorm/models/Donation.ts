import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { CampaignEntity, GiverDonationEntity } from '.'
import { BeneficiaryDonationEntity } from './BeneficiaryDonation'
import { SharedProps } from './SharedProps'

@Entity('donation')
export class DonationEntity extends SharedProps {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 50,
    type: "varchar",
  })
  name: string

  @Column({
    length: 50,
    type: 'varchar'
  })
  description: string

  @Column({
    length: 50,
    type: 'varchar'
  })
  category: string

  @Column()
  amountByBeneficiary: number

  @Column()
  collected: number

  @Column()
  total: number

  @OneToMany(() => GiverDonationEntity, giverdonation => giverdonation.donation )
  giverDonations: GiverDonationEntity[]

  @ManyToOne(() => CampaignEntity, campaign => campaign.donations)
  campaign: number


  @OneToMany(
    () => BeneficiaryDonationEntity,
    beneficiaryDonation=> beneficiaryDonation.donation
  )
  beneficiaryDonation?: BeneficiaryDonationEntity

}
