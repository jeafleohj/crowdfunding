import { User } from './User'
import { campaignType } from 'domain/entity/Campaign'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

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
}
