import { Beneficiary } from 'infrastructure/orm/typeorm/models/Beneficiary'
import { BeneficiaryRepository } from 'domain/repository/BeneficiaryRepository'
import { getRepository, Repository } from 'typeorm'

export class beneficiaryRepository implements BeneficiaryRepository {
  private repository: Repository<Beneficiary>
  constructor() {
    this.repository = getRepository(Beneficiary)
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
