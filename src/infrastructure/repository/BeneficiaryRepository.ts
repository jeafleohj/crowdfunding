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

  remove(id: number): void {
    throw new Error("Method not implemented.");
  }

  getAll(): Promise<Beneficiary[]> {
    throw new Error("Method not implemented.");
  }

  getByDocument(document: number): Promise<any> {
    const beneficiary = this.repository.findOne({ where: {document: document} })
    return beneficiary
  }

}
