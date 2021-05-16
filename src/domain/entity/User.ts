import { Campaign } from "./Campaign"
import { Volunteer } from "./Volunteer"

export class User {
  id: number
  name: string
  lastname: string
  password: string
  document?: string
  phone?: string
  email: string
  campaigns: Campaign[]
  volunteers: Volunteer[]
  generatePasswordHash: any
  constructor(user?: Partial<User>) {
    if(user !== undefined) {
      const {
        name = '',
        lastname = '',
        phone = '',
        email = '',
        password = '',
      } = user
      this.name = name.toLocaleLowerCase()
      this.lastname = lastname.toLocaleLowerCase()
      this.phone = phone
      this.email = email
      this.password = password
    }
  }
}
