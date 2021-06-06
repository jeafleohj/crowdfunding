import { Beneficiary } from 'domain/entity'
import { BeneficiaryEntity } from 'infrastructure/orm/typeorm/models'
import { IBeneficiaryRepository } from 'domain/repository'
import { getRepository, Repository } from 'typeorm'

export class BeneficiaryRepository implements IBeneficiaryRepository {
  private repository: Repository<BeneficiaryEntity>

  constructor() {
    this.repository = getRepository(BeneficiaryEntity)
  }

  persist(beneficiary: Beneficiary): Promise<any> {
    const new_beneficiary = this.repository.create(beneficiary)
    return this.repository.save(new_beneficiary)
  }

  merge(beneficiary: Beneficiary): void {
    throw new Error("Method not implemented.");
  }

  getAll(): Promise<Beneficiary[]> {
    throw new Error("Method not implemented.");
  }

  getByDocument(document: string): Promise<any> {
    const beneficiary = this.repository.findOne({ where: { document: document } })
    return beneficiary
  }

  async remove(beneficiary: Beneficiary): Promise<any> {
    const updated = await this.repository.findOne({ id: beneficiary.id }) as BeneficiaryEntity;
    return this.repository.remove(updated)
  }

  async updateBeneficiary(beneficiary: Partial<Beneficiary>): Promise<any> {
    const beneficiaryId = beneficiary.id
    delete beneficiary.campaign

    const response = this.repository
      .createQueryBuilder()
      .update()
      .set(beneficiary)
      .where('id = :id', {id: beneficiaryId})
      .execute()

    return response
  }

  async getTotalByCampaign(campaignId: number): Promise<number> {
    let total = await this.repository.count({ where: { campaignId: campaignId } })
    return total
  }

}
