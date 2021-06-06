import { Beneficiary } from 'domain/entity'

const CreateBeneficiary = async (data: Beneficiary,
                           { beneficiaryRepository:repository }: MyRepository): Promise<any> => {
  const beneficiary = await repository.getByDocument(data.document)
  if( beneficiary === undefined ) {
    const new_beneficiary = new Beneficiary(data)
    return repository.persist(new_beneficiary)
  }
  return beneficiary
}

export {
  CreateBeneficiary
}
