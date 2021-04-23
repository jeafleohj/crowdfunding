import { User } from 'domain/User'
 export interface UserRepository {
   persist(domainUser: any): Promise<any>
   merge(domainUser: any): void
   remove(userId: number): void
   get(): Promise<any>
   getByEmail(email: string): Promise<User>
   find(): void
}
