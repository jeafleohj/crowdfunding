import { TokenBlacklisting } from 'domain/entity/TokenBlacklisting'
import { ITokenBlacklistingRepository } from 'domain/repository/TokenBlacklisting'

export function AddToken(jwtid: string,
                         {tokenBlacklistingRepository}:{tokenBlacklistingRepository: ITokenBlacklistingRepository}) : Promise<any> {
  const token = new TokenBlacklisting(jwtid)
  return tokenBlacklistingRepository.addToken(token)
}
