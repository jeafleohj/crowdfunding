export enum CampaignStageType {
  created = 'creada',
  collection = 'recaudación',
  delivery = 'entrega',
  finished = 'finalizada',
}

export class CampaingStage {
  id: number
  address: string
  notes: string
  campaign: number
  stage: CampaignStageType
  startDate: Date
  endDate: Date
}
