export class Beneficiary {
  id: number
  name: string
  lastname: string
  maternal_lastname: string
  sex: string
  nse: string
  document: string
  age: number
  district?: number
  address: string
  status: string
  campaign?: number

  constructor({name, lastname, maternal_lastname, sex, nse, document, age, district, address, status, campaign}
              :Beneficiary) {
    this.name = name
    this.lastname = lastname
    this.maternal_lastname = maternal_lastname
    this.sex = sex
    this.nse = nse
    this.document = document
    this.age = age
    this.district = district
    this.address = address
    this.status = status
    this.campaign = campaign
  }
}
