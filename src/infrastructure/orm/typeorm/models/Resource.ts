import { CampaignEventType } from 'domain/entity/CampaignEvent'
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { CampaignEntity } from './Campaign'
import { SharedProps } from './SharedProps'

@Entity('resource')
export class ResourceEntity extends SharedProps {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  location: string

  @ManyToOne(() => CampaignEntity, campaign => campaign.id)
  @JoinColumn({ name: "campaign" })
  campaign?: number
}
