export class Province {
  id: string
  name: string
  regionId?: string
  constructor({name, regionId}: Province) {
    this.name = name
    this.regionId = regionId
  }
}
