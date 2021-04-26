export enum campaignType {
  material = 'materiales',
  service = 'serviciales',
  monetary = 'monetario',
}

export enum campaignStatus {
  created = 'creada',
  published = 'publicada',
  distribution = 'distribution',
  finalized = 'finalizada',
}

export type CampaignData = {
  id: number
  name: string
  userId?: number
  description?: string
  type: campaignType
  release?: Date
  ending?: Date
  status: campaignStatus
}

export class Campaign {
  id: number
  name: string
  userId?: number
  description: string
  type: campaignType
  release: Date
  ending: Date
  status: campaignStatus // --> creada, publicada (recaudacion), distribucion,& finalizada

  constructor({name, type}:CampaignData) {
    this.name = name
    this.type = type
    this.status = campaignStatus.created
  }
}
