export class User {
  id: number
  name: string
  lastname: string
  password: string
  document: string
  phone: string
  email: string
  constructor({name, email, lastname, password, phone}: User) {
    this.name = name.toLocaleLowerCase()
    this.lastname = lastname.toLocaleLowerCase()
    this.phone = phone
    this.email = email
    this.password = password
  }
}
