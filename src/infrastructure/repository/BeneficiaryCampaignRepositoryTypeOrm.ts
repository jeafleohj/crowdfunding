import { BeneficiaryCampaign } from 'domain/entity'
import { StatusBeneficiaryCampaign } from 'domain/entity/BeneficiaryCampaign';
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

  async merge(payload: Partial<BeneficiaryCampaign>): Promise<any> {
    const {campaignId, beneficiaryId } = payload
    delete payload.beneficiaryId
    delete payload.campaignId

    const response = await this.repository
      .createQueryBuilder()
      .update()
      .set(payload)
      .where('beneficiaryId = :beneficiaryId', {beneficiaryId})
      .andWhere('campaignId = :campaignId', {campaignId})
      .execute()

    return response
  }

  remove(beneficiaryId: number, campaignId: number): Promise<any> {
    return this.repository.delete({
      beneficiaryId,
      campaignId,
    })
  }

  updateStatus(beneficiaryId: number, campaignId: number, status :StatusBeneficiaryCampaign): Promise<any> {
    return this.repository
      .update({beneficiaryId, campaignId},{status})
  }

}
