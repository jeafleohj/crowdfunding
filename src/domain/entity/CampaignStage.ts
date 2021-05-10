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
  endDate: Date
  constructor({
               name,
               address,
               details,
               campaign,
               stage,
               startDate,
               endDate,
  }: CampaignStage) {
    this.name = name
    this.address = address
    this.details = details
    this.campaign = campaign
    this.stage = stage
    this.startDate = startDate
    this.endDate = endDate
  }
}
