import {Entity, Column, PrimaryGeneratedColumn, BeforeInsert} from 'typeorm'
import bcrypt from 'bcryptjs';

@Entity()
export class User{
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string
  @Column()
  lastname: string
  @Column()
  phone: string
  @Column()
  email: string
  @Column()
  password: string

  @BeforeInsert()
  async generatePasswordHash(): Promise<void> {
    this.password = bcrypt.hashSync(this.password.toLocaleUpperCase(), bcrypt.genSaltSync())
  }
}
