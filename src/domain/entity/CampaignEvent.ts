export enum CampaignEventType {
  collection = 'recaudación',
  delivery = 'entrega',
  pickup = 'recoger',
}

export class CampaignEvent {
  id?: number
  name: string
  address: string
  details: string
  campaign: number
  stage: CampaignEventType
  startDate: Date
  endingDate: Date
  startTime: string
  endingTime: string
  constructor({
               name,
               address,
               details,
               campaign,
               stage,
               startDate,
               endingDate,
               startTime,
               endingTime
  }: CampaignEvent) {
    this.name = name
    this.address = address
    this.details = details
    this.campaign = campaign
    this.stage = stage
    this.startDate = startDate
    this.endingDate = endingDate
    this.startTime = startTime
    this.endingTime = endingTime
  }
}
