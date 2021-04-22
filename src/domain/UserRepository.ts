 export interface UserRepository {
   persist(domainUser: any): Promise<any>
   merge(domainUser: any): void
   remove(userId: number): void
   get(userId: number): Promise<any>
   getByEmail(email: string): void
   find(): void
}
