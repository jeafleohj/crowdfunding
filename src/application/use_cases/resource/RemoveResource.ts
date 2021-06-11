import { Resource } from "domain/entity"

async function RemoveResource(
  id: number,
  { resourceRepository: repository }: MyRepository

): Promise<any> {
  return repository.remove(id)
}

export {
  RemoveResource
}
