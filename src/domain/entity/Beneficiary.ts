export class Beneficiary {
  id: number
  name: string
  lastname: string
  maternal_lastname: string
  sex: string
  nse: string
  document: string
  age: number
  district?: string
  province?: string
  region?: string
  address: string
  handicapped: boolean
  campaign?: number

  constructor({name, lastname, maternal_lastname, province, region, sex, nse, document, age, district, address, handicapped, campaign}
              :Beneficiary) {
    this.name = name
    this.lastname = lastname
    this.maternal_lastname = maternal_lastname
    this.sex = sex
    this.nse = nse
    this.document = document
    this.age = age
    this.district = district
    this.province = province
    this.region = region
    this.address = address
    this.handicapped = handicapped
    this.campaign = campaign
  }
}
