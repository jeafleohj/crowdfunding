import { TokenBlacklisting } from 'domain/entity/TokenBlacklisting'
import { ITokenBlacklistingRepository } from 'domain/repository'
import { TokenBlacklistingEntity } from 'infrastructure/orm/typeorm/models/TokenBlacklisting'
import { getRepository, Repository } from 'typeorm'

export class TokenBlacklistingRepository implements ITokenBlacklistingRepository {
  private repository: Repository<TokenBlacklistingEntity>

  constructor(){
    this.repository = getRepository(TokenBlacklistingEntity)
  }

  async findToken(jwtid: string): Promise<boolean> {
    const token = await this.repository.findOne({jwtid: jwtid})
    return token ? true : false
  }

  addToken(payload: TokenBlacklisting): Promise<any> {
    return this.repository.save(payload)
  }
}
