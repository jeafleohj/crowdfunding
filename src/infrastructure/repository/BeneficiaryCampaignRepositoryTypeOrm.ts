import { BeneficiaryCampaign } from 'domain/entity'
import { IBeneficiaryCampaignRepository } from 'domain/repository/BeneficiaryCampaignRepository'
import { BeneficiaryCampaignEntity } from 'infrastructure/orm/typeorm/models/BeneficiaryCampaign';
import { getRepository, Repository } from 'typeorm'

export class BeneficiaryCamapaignRepository implements IBeneficiaryCampaignRepository {
  private repository: Repository<BeneficiaryCampaignEntity>

  constructor() {
    this.repository = getRepository(BeneficiaryCampaignEntity)
  }

  persist(beneficiaryId: number, campaignId: number ): Promise<any> {
    const insertion = this.repository.insert({
      beneficiaryId,
      campaignId ,
    })
    return insertion
  }

  merge(payload: Partial<BeneficiaryCampaign>): void {
    throw new Error("Method not implemented.");
  }

  remove(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
