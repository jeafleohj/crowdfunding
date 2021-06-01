import { Column, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
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

  @Column()
  collected: number

  @Column()
  total: number

  @ManyToOne(() => CampaignEntity, campaign => campaign.donations)
  campaign: number

}
