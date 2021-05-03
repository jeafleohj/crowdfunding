import { TokenBlacklisting } from 'domain/entity'
import { ITokenBlacklistingRepository } from 'domain/repository'

export function AddToken(jwtid: string,
                         {tokenBlacklistingRepository}:{tokenBlacklistingRepository: ITokenBlacklistingRepository}) : Promise<any> {
  const token = new TokenBlacklisting(jwtid)
  return tokenBlacklistingRepository.addToken(token)
}
