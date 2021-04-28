import { UserEntity } from './User'
import { BeneficiaryEntity } from './Beneficiary'
import { campaignType } from 'domain/entity/Campaign'
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity('campaign')
export class CampaignEntity{
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
}
