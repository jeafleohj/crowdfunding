import { User } from 'domain/entity'
export interface IUserRepository {
   persist(domainUser: any): Promise<any>
   merge(domainUser: any): void
   remove(userId: number): void
   getAll(): Promise<User[]>
   getById(id: number): Promise<User>
   getByEmail(email: string): Promise<User>
   updateUser(id: number, data: Partial<User>): Promise<any>
   find(): void
}
