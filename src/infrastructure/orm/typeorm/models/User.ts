import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, OneToMany } from 'typeorm'
import bcrypt from 'bcryptjs';
import { CampaignEntity } from './Campaign';
import { VolunteerEntity } from './Volunteer';

@Entity('user')
export class UserEntity{
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

  @Column({
    nullable: true
  })
  password: string

  @OneToMany(()=>CampaignEntity, campaign => campaign.id, {
    cascade: true
  })
  campaigns: CampaignEntity[]

  @OneToMany(() => VolunteerEntity, volunteer => volunteer.user )
  volunteers!: VolunteerEntity[]

  @BeforeInsert()
  async generatePasswordHash(): Promise<void> {
    if( this.password ) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
    }
  }
}
