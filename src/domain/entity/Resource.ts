
export class Resource {
  id: number
  name: string
  location: string
  campaign: number
  constructor({
    name,
    location,
    campaign
  }: Resource) {
    this.name = name
    this.location = location
    this.campaign = campaign
  }
}
