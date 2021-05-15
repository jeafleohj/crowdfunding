import { giverStatus } from 'domain/entity/Giver';
import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import { CampaignEntity } from '.';
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

  @Column({
    unique: true
  })
  email: string

  @Column({
    length: 8,
    type: 'char',
    unique: true
  })
  document: string

  @Column({
    length: 50,
    type: 'varchar'
  })
  address: string

  @Column({
    length: 50,
    type: 'varchar'
  })
  reference: string

  @Column({
    nullable: true,
  })
  collection: Date

  @Column({
    type: 'enum',
    enum: giverStatus,
    default: giverStatus.initial
  })
  status: giverStatus

  @Column()
  eventId: number

  @Column()
  campaignId: number

  // @OneToOne(() => GiverEntity)
  // @JoinColumn()
  // giver: Profile;

  @ManyToOne(() => CampaignEntity, campaign => campaign.givers, {
    eager: true
  })
  @JoinTable()
  campaign!: CampaignEntity

}
