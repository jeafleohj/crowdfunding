import { User } from './User'
import { Beneficiary } from './Beneficiary'
import { campaignType } from 'domain/entity/Campaign'
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Campaign{
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
  @ManyToOne(()=>User, user=>user.id)
  user: User
  @ManyToMany(() => Beneficiary, {
    cascade: true,
    eager: true
  })
  @JoinTable()
  beneficiaries: Beneficiary[]
}
