import { CampaignStageType } from 'domain/entity/CampaignStage'
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { CampaignEntity } from './Campaign'
import { SharedProps } from './SharedProps'

@Entity()
export class CampaignStageEntity extends SharedProps {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  address: string

  @Column()
  details: string

  @ManyToOne(() => CampaignEntity, campaign => campaign.id)
  @JoinColumn({ name: "campaign" })
  campaign?: number

  @Column({
    type: 'enum',
    enum: CampaignStageType

  })
  stage: CampaignStageType

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  startDate: Date

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  endDate: Date
}
