import { User, Volunteer } from 'domain/entity'
import { Giver } from './Giver'
import { Donation } from './Donation'
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
  user: User
  image_url?: string
  description: string
  type: campaignType
  release: Date
  ending: Date
  status: campaignStatus
  beneficiaries: Beneficiary[]
  givers: Giver[]
  donations: Donation[]
  volunteers: Volunteer[]

  constructor({id, name, type, user, image_url}: Partial<Campaign>) {
    this.id = id || 0
    this.name = name || ''
    this.type = type || campaignType.material
    this.status = campaignStatus.created
    this.user = user || new User()
    this.image_url = image_url || ''
  }
}
