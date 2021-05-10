export enum CampaignStageType {
  collection = 'recaudación',
  delivery = 'entrega',
}

export class CampaingStage {
  id: number
  name: string
  address: string
  details: string
  campaign: number
  stage: CampaignStageType
  startDate: Date
  endDate: Date
}
