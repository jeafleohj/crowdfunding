import { Donation } from './Donation';
import { Beneficiary } from "./Beneficiary"

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

export class Campaign {
  id: number
  name: string
  user?: number
  url_imagen?: string
  description: string
  type: campaignType
  release: Date
  ending: Date
  status: campaignStatus
  beneficiaries: Beneficiary[]
  donations: Donation[]

  constructor({name, type, user}: Campaign) {
    this.name = name
    this.type = type
    this.status = campaignStatus.created
    this.user = user
  }
}
