export class District {
  id: number
  name: string
  provinceId?: number
  clasification: string
  constructor({name, clasification, provinceId}: District) {
    this.name = name
    this.provinceId = provinceId
    this.clasification = clasification
  }
}
