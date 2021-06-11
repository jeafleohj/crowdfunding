import { DonationEntity } from './Donation';
import { UserEntity } from './User'
import { BeneficiaryEntity } from './Beneficiary'
import { campaignStatus, campaignType } from 'domain/entity/Campaign'
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { VolunteerEntity } from './Volunteer';
import { SharedProps } from './SharedProps';
import { GiverEntity } from './Giver';
import { CampaignEventEntity } from './CampaignEvent';
import { BeneficiaryCampaignEntity } from './BeneficiaryCampaign';
import { ResourceEntity } from './Resource';

@Entity('campaign')
export class CampaignEntity extends SharedProps {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string

  @Column({
    nullable: true,
  })
  description: string

  @Column({
    type: 'enum',
    enum: campaignType,
  })
  type: campaignType

  @Column({
    nullable: true,
  })
  release: Date

  @Column({
    nullable: true,
  })
  ending: Date

  @Column({
    type: 'enum',
    enum: campaignStatus,
    default: campaignStatus.created
  })
  status: campaignStatus

  @ManyToOne(()=>UserEntity, user=>user.id)
  user: number

  @OneToMany(() => DonationEntity, donation => donation.campaign, {
    cascade: true,
  })
  donations!: DonationEntity[]

  @OneToMany(() => CampaignEventEntity, campaignEvent => campaignEvent.campaign )
  @JoinTable()
  events: CampaignEventEntity[]

  @OneToMany(() => VolunteerEntity, volunteer => volunteer.user )
  volunteers!: VolunteerEntity[]

  @OneToMany(() => GiverEntity, giver => giver.campaign, {
    cascade: true,
  })
  givers!: GiverEntity[]

  @Column({
    type: 'mediumtext',
  })
  image_url?: string

  @OneToMany(
    () => BeneficiaryCampaignEntity,
    beneficiaryCampaignEntity => beneficiaryCampaignEntity.campaign
  )
  beneficiaryCampaign: BeneficiaryCampaignEntity;

  @OneToMany(() => ResourceEntity, resource => resource.campaign )
  @JoinTable()
  resources?: ResourceEntity[]
}
