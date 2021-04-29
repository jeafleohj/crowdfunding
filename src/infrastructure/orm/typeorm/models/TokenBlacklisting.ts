import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('tokenblacklisting')
export class TokenBlacklistingEntity {
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  jwtid: string;

}
