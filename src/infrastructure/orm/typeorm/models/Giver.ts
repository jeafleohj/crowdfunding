import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import { giverStatus } from 'domain/entity/Giver';
import { CampaignEntity, GiverDonationEntity } from '.'
import { SharedProps } from './SharedProps'

@Entity('giver')
export class GiverEntity extends SharedProps {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
    type: "varchar",
  })
  name: string

  @Column({
    length: 50,
    type: 'varchar'
  })
  lastname: string

  @Column()
  phone?: string

  @Column()
  email: string

  @Column({
    length: 8,
    type: 'char',
    nullable: true
  })
  document: string

  @Column({
    type: 'enum',
    enum: giverStatus,
    default: giverStatus.initial
  })
  status: giverStatus

  @Column({
    nullable: true
  })
  eventId: number

  @OneToMany(() => GiverDonationEntity, giverdonation => giverdonation.giverId )
  giverDonations!: GiverDonationEntity[]

  @ManyToOne(() => CampaignEntity, campaign => campaign.givers)
  campaign: number
}
