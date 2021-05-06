import { Beneficiary } from 'domain/entity'
import { IBeneficiaryRepository } from 'domain/repository'

const RemoveBeneficiary = (id: number,
  { beneficiaryRepository }: {beneficiaryRepository : IBeneficiaryRepository }): Promise<Beneficiary> => {
  return beneficiaryRepository.remove(id)
}

export {
  RemoveBeneficiary
}
