export enum CampaignStageType {
  collection = 'recaudación',
  delivery = 'entrega',
}

export class CampaignStage {
  id: number
  name: string
  address: string
  details: string
  campaign: number
  stage: CampaignStageType
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
  }: CampaignStage) {
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
