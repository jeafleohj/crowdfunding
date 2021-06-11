import { Resource } from "domain/entity"

async function CreateResource(
  resource: Resource,
  { resourceRepository: repository }: MyRepository

): Promise<any> {
  return repository.persist(resource)
}

export {
  CreateResource
}
