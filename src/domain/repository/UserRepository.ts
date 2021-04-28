import { User } from 'domain/entity/User'
export interface IUserRepository {
   persist(domainUser: any): Promise<any>
   merge(domainUser: any): void
   remove(userId: number): void
   getAll(): Promise<User[]>
   getByEmail(email: string): Promise<User>
   find(): void
}
