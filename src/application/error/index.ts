export class ErrorHandler extends Error {
  status: number
  message: string
  constructor({status, message }: Partial<ErrorHandler>) {
    super()
    this.name = 'handcrafted'
    this.status = status || 400
    this.message= message || ''
  }
}
