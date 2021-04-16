export class Document  {
  type: number
  name: string
  value: string
  constructor(type: number, name: string, value: string) {
    this.name = name
    this.type = type
    this.value = value
  }
  async validate(): Promise<void> {

  }
}
