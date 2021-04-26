export type CampaignData = {
  id: number
  name: string
  userId?: number
  description: string
  type: string
  release: Date
  ending: Date
  status: string 
}

export class Campaign {
  id: number
  name: string
  userId?: number
  description: string
  type: string
  release: Date
  ending: Date
  status: string // --> creada, publicada (recaudacion), distribucion,& finalizada  

  constructor({name, type, status}:CampaignData) {
    this.name = name
    this.type = type
    this.status = status
  }
}
