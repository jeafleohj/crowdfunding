import { Document } from './DocumentModel'

export type userData = {
  name: string
  lastname: string
  type: number
  document_name: string
  document_value: string
  phone: string
  email: string
}

export class User {
  name: string
  lastname: string
  password: string
  document: Document
  phone: string
  email: string
  constructor({name, lastname}: userData) {
    this.name = name.toLocaleLowerCase()
    this.lastname = lastname.toLocaleLowerCase()
    //this.document = new Document(type, document_name, document_value)
  }
}
