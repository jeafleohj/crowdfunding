import { ITokenBlacklistingRepository } from 'domain/repository'

export function FindToken(jwtid: string,
                         {tokenBlacklistingRepository}:{tokenBlacklistingRepository: ITokenBlacklistingRepository}) : Promise<any> {
  return tokenBlacklistingRepository.findToken(jwtid)
}
