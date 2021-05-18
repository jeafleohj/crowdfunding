import { GiverEntity } from './../orm/typeorm/models/Giver';
import { Repository, getRepository } from 'typeorm';
import { Giver } from 'domain/entity';
import { IGiverRepository } from 'domain/repository';

export class GiverRepository implements IGiverRepository {
  private repository: Repository<GiverEntity>

  constructor() {
    this.repository = getRepository(GiverEntity)
  }

  async getByCampaign(campaignId: number): Promise<any> {
    const givers = await this.repository
      .createQueryBuilder("giver")
      .where("giver.campaignId = :campaignId", { campaignId: campaignId })
      .getMany()
    return givers
  }

  update(giver: Giver): Promise<any> {
    throw new Error('Method not implemented.');
  }

  async getById(giverId: number, campaignId: number): Promise<any> {
    const giver = await this.repository.findOne({
      select: [
        'id', 'name', 'lastname'
      ],
      where: [{ id: giverId }],
      join: {
        alias: 'giver',
        leftJoinAndSelect: {
          campaign: 'giver.campaign',
        },
      }
    })
    console.log(giver)
    return giver
  }
}