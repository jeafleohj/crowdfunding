import { TokenBlacklisting } from 'domain/entity/TokenBlacklisting'

export interface ITokenBlacklistingRepository {
  addToken(payload: TokenBlacklisting): Promise<any>
  findToken(jwtid: string): Promise<any>
}
