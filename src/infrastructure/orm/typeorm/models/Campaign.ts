import { User } from './User';
import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, BeforeInsert} from 'typeorm'

@Entity()
export class Campaign{
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string
  @Column()
  lastname: string
  @Column()
  description: string
  @Column()
  type: string
  @Column()
  release: Date
  @Column()
  ending: Date
  @Column()
  status: string
  @ManyToOne(()=>User, user=>user.id) //no estoy segura de esto xd
  user: User
}
