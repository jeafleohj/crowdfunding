import { CampaignEventType } from 'domain/entity/CampaignEvent'
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { CampaignEntity } from './Campaign'
import { SharedProps } from './SharedProps'

@Entity('campaignEvent')
export class CampaignEventEntity extends SharedProps {
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
    enum: CampaignEventType

  })
  stage: CampaignEventType

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  startDate: Date

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  endingDate: Date

  @Column({
    nullable: true,
  })
  startTime: string

  @Column({
    nullable: true,
  })
  endingTime: string

}
