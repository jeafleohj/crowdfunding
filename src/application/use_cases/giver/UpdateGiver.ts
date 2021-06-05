import { Giver } from 'domain/entity/Giver';
import { IGiverRepository } from 'domain/repository'

async function UpdateGiver (
  id: number,
  data: Partial<Giver>,
  { giverRepository }: {giverRepository : IGiverRepository }): Promise<any>  {
  return giverRepository.update(id, data)
}

export {
  UpdateGiver
}
