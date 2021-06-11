import { Resource } from "domain/entity"

async function ListResources(
  campaignId: number,
  { resourceRepository: repository }: MyRepository

): Promise<any> {
  return repository.getByCampaign(campaignId)
}

export {
  ListResources
}
