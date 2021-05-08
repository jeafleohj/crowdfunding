import { DonationEntity } from './Donation';
import { UserEntity } from './User'
import { BeneficiaryEntity } from './Beneficiary'
import { campaignType } from 'domain/entity/Campaign'
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { VolunteerEntity } from './Volunteer';
import { SharedProps } from './SharedProps';

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

  @Column()
  status: string

  @ManyToOne(()=>UserEntity, user=>user.id)
  user: UserEntity

  @ManyToMany(() => BeneficiaryEntity, {
    cascade: true,
    eager: true
  })
  @JoinTable()
  beneficiaries: BeneficiaryEntity[]

  @ManyToMany(() => DonationEntity, {
    cascade: true,
    eager: true
  })
  @JoinTable()
  donations: DonationEntity[]

  @OneToMany(() => VolunteerEntity, volunteer => volunteer.user )
  volunteers!: VolunteerEntity[]

}
