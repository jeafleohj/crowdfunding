import { Beneficiary } from 'domain/entity'
import { IBeneficiaryRepository } from 'domain/repository'

const UpdateBeneficiary = (data: Beneficiary,
  { beneficiaryRepository }: {beneficiaryRepository : IBeneficiaryRepository }): Promise<any> => {
  return beneficiaryRepository.updateBeneficiary(data)
}

export {
  UpdateBeneficiary
}
