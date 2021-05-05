import { Beneficiary } from 'domain/entity'
import { IBeneficiaryRepository } from 'domain/repository'

const GetByDocument = (document: number, { beneficiaryRepository }: { beneficiaryRepository: IBeneficiaryRepository }): Promise<Beneficiary> => {
  return beneficiaryRepository.getByDocument(document)
}

export {
  GetByDocument
}
