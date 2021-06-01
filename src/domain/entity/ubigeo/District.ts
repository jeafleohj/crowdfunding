export class District {
  id: string
  name: string
  provinceId?: string
  clasification: string
  constructor({name, clasification, provinceId}: District) {
    this.name = name
    this.provinceId = provinceId
    this.clasification = clasification
  }
}
