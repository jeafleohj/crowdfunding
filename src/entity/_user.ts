import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

type UserRoleType = "donante" | "voluntario" | "recaudador"

@Entity()
export class _User{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    namer: String
    @Column()
    lastname: String
    @Column()
    phone: string
    @Column()
    email: string

//    @Column({
//        type: "enum",
//        enum: ["donante" , "voluntario" , "recaudador"],
//        default: "recaudador"
//    })
//    role: UserRoleType
}
