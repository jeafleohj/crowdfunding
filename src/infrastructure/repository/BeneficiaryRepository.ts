import { BeneficiaryEntity } from 'infrastructure/orm/typeorm/models/Beneficiary'
import { IBeneficiaryRepository } from 'domain/repository/BeneficiaryRepository'
import { getRepository, Repository } from 'typeorm'
import { Beneficiary } from 'domain/entity/Beneficiary'

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

  remove(id: number): void {
    throw new Error("Method not implemented.");
  }

  getAll(): Promise<Beneficiary[]> {
    throw new Error("Method not implemented.");
  }
}
