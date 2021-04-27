import {Entity, Column, PrimaryGeneratedColumn, BeforeInsert, OneToMany} from 'typeorm'
import bcrypt from 'bcryptjs';
import { Campaign } from './Campaign';

@Entity()
export class User{
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string
  @Column()
  lastname: string
  @Column()
  phone?: string
  @Column({
    nullable: true
  })
  document?: string
  @Column({
    unique: true
  })
  email: string
  @Column()
  password: string

  @OneToMany(()=>Campaign, campaign => campaign.id, {
    cascade: true
  })
  campaigns: Campaign[]

  @BeforeInsert()
  async generatePasswordHash(): Promise<void> {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
  }
}
