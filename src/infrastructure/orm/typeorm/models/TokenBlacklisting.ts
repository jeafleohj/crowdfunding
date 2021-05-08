import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { SharedProps } from './SharedProps'

@Entity('tokenblacklisting')
export class TokenBlacklistingEntity extends SharedProps {
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  jwtid: string;

}
