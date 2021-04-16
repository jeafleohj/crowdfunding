import { Document } from './DocumentModel'
export class UserModel {
  name: string
  lastname: string
  password: string
  document: Document
  phone: string
  email: string
  constructor(name: string, lastname: string, type: number, document_name: string, document_value: string) {
    this.name = name.toLocaleLowerCase()
    this.lastname = lastname.toLocaleLowerCase()
    this.document = new Document(type, document_name, document_value)
  }
}
