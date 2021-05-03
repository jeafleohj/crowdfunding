import { Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import { CampaignEntity } from './Campaign'
import { UserEntity } from './User'

@Entity('volunteer')
export class VolunteerEntity {
  @PrimaryGeneratedColumn()
  volunteerId: number;

  @Column()
  userId: number

  @Column()
  campaignId: number

  @ManyToOne(() => UserEntity, user => user.volunteers)
  user!: UserEntity

  @ManyToOne(() => CampaignEntity, campaign => campaign.volunteers)
  campaign!: CampaignEntity

}
