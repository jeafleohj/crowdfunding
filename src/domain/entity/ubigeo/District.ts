export class District {
  id: number
  name: string
  province_id: number
  constructor({name, province_id}: District) {
    this.name = name
    this.province_id = province_id
  }
}
