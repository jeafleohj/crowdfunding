import { User } from 'domain/Entity/User'
export interface UserRepository {
   persist(domainUser: any): Promise<any>
   merge(domainUser: any): void
   remove(userId: number): void
   getAll(): Promise<User[]>
   getByEmail(email: string): Promise<User>
   find(): void
}
