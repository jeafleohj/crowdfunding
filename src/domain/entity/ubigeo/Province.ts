export class Province {
  id: number
  name: string
  regionId?: number
  constructor({name, regionId}: Province) {
    this.name = name
    this.regionId = regionId
  }
}
