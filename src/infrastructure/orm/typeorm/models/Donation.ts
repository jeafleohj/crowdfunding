import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { CampaignEntity } from '.'
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

  @ManyToOne(() => CampaignEntity, campaign => campaign.donations)
  campaign: CampaignEntity

}
