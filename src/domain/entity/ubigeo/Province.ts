export class Province {
  id: string
  name: string
  regionId?: number
  constructor({name, regionId}: Province) {
    this.name = name
    this.regionId = regionId
  }
}
