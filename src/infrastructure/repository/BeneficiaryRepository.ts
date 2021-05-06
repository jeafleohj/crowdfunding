import { Beneficiary } from 'domain/entity'
import { CampaignEntity } from 'infrastructure/orm/typeorm/models/Campaign';
import { BeneficiaryEntity } from 'infrastructure/orm/typeorm/models'
import { IBeneficiaryRepository } from 'domain/repository'
import { getRepository, Repository } from 'typeorm'

export class BeneficiaryRepository implements IBeneficiaryRepository {
  private repository: Repository<BeneficiaryEntity>
  
  constructor() {
    this.repository = getRepository(BeneficiaryEntity)
  }

  persist(beneficiary: Beneficiary): Promise<any> {
    //hay que ver si está en la db para actualizar los datos o sino recien guardarlos
    const new_beneficiary = this.repository.create(beneficiary)
    return this.repository.save(new_beneficiary)
  }

  merge(beneficiary: Beneficiary): void {
    throw new Error("Method not implemented.");
  }

  getAll(): Promise<Beneficiary[]> {
    throw new Error("Method not implemented.");
  }

  getByDocument(document: number): Promise<any> {
    const beneficiary = this.repository.findOne({ where: { document: document } })
    return beneficiary
  }

  async remove(beneficiary: Beneficiary): Promise<any> {
    const updated = await this.repository.findOne({ id: beneficiary.id }) as BeneficiaryEntity;
    return this.repository.remove(updated)
  }

  async updateBeneficiary(beneficiary: Beneficiary): Promise<any> {
    let updated = await this.repository.findOne({ id: beneficiary.id }) as BeneficiaryEntity
    updated = beneficiary
    return this.repository.save(updated)
  }

}
