import { CampaignEntity } from './../orm/typeorm/models/Campaign';
import { UserEntity } from './../orm/typeorm/models/User';
import { User, Volunteer } from 'domain/entity'
import { IVolunteerRepository } from 'domain/repository'
import { VolunteerEntity } from 'infrastructure/orm/typeorm/models/Volunteer'
import { getRepository, Repository } from 'typeorm'

export class VolunteerRepository implements IVolunteerRepository {
  private repository: Repository<VolunteerEntity>

  constructor() {
    this.repository = getRepository(VolunteerEntity)

  }
  async getCampaigns(userId: number): Promise<any> {
    const campaigns = await this.repository.find({ where: [{ userId: userId }] })
    // const campaigns = await this.repository.createQueryBuilder("volunteer")
    // .where("volunteer.userId = :userId", { userId: userId })
    // .innerJoinAndSelect(CampaignEntity, "campaign", "campaign.id = volunteer.campaignId")
    // .getMany();
    // console.log(campaigns)
    return campaigns
  }

  add(campaignId: number, userId: number): Promise<any> {
    const volunteer = new Volunteer({campaignId, userId})
    console.log(volunteer)
    const new_volunteer = this.repository.create(volunteer)
    return this.repository.save(new_volunteer)
  }

  getAll(): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async getByCampaign(campaingId: number): Promise<any> {
    const response = await this.repository.find({
      where: {campaignId: campaingId},
      join: {
        alias: "volunteer",
        leftJoinAndSelect: {
          user: "volunteer.user",
        }
      }
    })
    const volunteers = response.map(volunteer => {
      let user: Partial<User> = new User(volunteer.user as User)
      delete user.password
      return user
    })

    return volunteers
  }
}
