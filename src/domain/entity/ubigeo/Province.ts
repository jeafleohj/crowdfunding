export class Province {
  id: number
  name: string
  region_id: number
  constructor({name, region_id}: Province) {
    this.name = name
    this.region_id = region_id
  }
}
