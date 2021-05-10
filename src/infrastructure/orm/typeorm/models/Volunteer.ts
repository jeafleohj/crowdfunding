import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import { CampaignEntity } from './Campaign'
import { SharedProps } from './SharedProps'
import { UserEntity } from './User'

@Entity('volunteer')
export class VolunteerEntity extends SharedProps {
  @PrimaryGeneratedColumn()
  volunteerId: number;

  @Column()
  userId: number

  @Column()
  campaignId: number

  @ManyToOne(() => UserEntity, user => user.volunteers)
  @JoinTable()
  user!: UserEntity

  @ManyToOne(() => CampaignEntity, campaign => campaign.volunteers, {
    eager: true
  })
  @JoinTable()
  campaign!: CampaignEntity

}
