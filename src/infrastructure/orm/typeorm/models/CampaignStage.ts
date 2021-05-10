import { CampaignStageType } from 'domain/entity/CampaignStage'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { SharedProps } from './SharedProps'

@Entity()
export class CampaingStage extends SharedProps {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  address: string

  @Column()
  details: string

  @Column()
  campaign: number

  @Column({
    type: 'enum',
    enum: CampaignStageType

  })
  stage: CampaignStageType

  @Column()
  startDate: Date

  @Column()
  endDate: Date
}
