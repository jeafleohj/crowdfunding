export class Beneficiary {
  id: number
  name: string
  lastname: string
  maternal_lastname: string
  sex: string
  nse: string
  document: string
  age: number
  provinceId?: number
  address: string
  status: string

  constructor({name, lastname, maternal_lastname, sex, nse, document, age, provinceId, address, status}:Beneficiary) {
    this.name = name
    this.lastname = lastname
    this.maternal_lastname = maternal_lastname
    this.sex = sex
    this.nse = nse
    this.document = document
    this.age = age
    this.provinceId = provinceId
    this.address = address
    this.status = status
  }
}
