export type userData = {
  id: number
  name: string
  lastname: string
  document: string
  phone: string
  email: string
  password: string
}

export class User {
  id: number
  name: string
  lastname: string
  password: string
  document: Document
  phone: string
  email: string
  constructor({name, email, lastname, password, phone}: userData) {
    this.name = name.toLocaleLowerCase()
    this.lastname = lastname.toLocaleLowerCase()
    this.phone = phone
    this.email = email
    this.password = password
  }
}
