export class District {
  id: number
  name: string
  provinceId?: number
  constructor({name, provinceId}: District) {
    this.name = name
    this.provinceId = provinceId
  }
}
