import { Donation } from './Donation';
import { Beneficiary } from "./Beneficiary"
import { Giver } from './Giver';

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
  image_url?: string
  description: string
  type: campaignType
  release: Date
  ending: Date
  status: campaignStatus
  beneficiaries: Beneficiary[]
  giver: Giver[]
  donations: Donation[]

  constructor({name, type, user, image_url}: Campaign) {
    this.name = name
    this.type = type
    this.status = campaignStatus.created
    this.user = user
    this.image_url = image_url || ''
  }
}
