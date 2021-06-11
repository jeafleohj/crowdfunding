import { Resource } from 'domain/entity'

export interface IResourceRepository {
  persist(resource: Resource): Promise<any>
  merge(data: Partial<Resource>): void
  remove(id: number): Promise<boolean>
  getByCampaign(id: number): Promise<any>
}
