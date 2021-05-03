import { TokenBlacklisting } from 'domain/entity'

export interface ITokenBlacklistingRepository {
  addToken(payload: TokenBlacklisting): Promise<any>
  findToken(jwtid: string): Promise<any>
}
