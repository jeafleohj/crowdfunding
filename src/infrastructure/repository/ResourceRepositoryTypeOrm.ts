import { Resource } from "domain/entity";
import { IResourceRepository } from "domain/repository";
import { ResourceEntity } from "infrastructure/orm/typeorm/models";
import { getRepository, Repository } from "typeorm";

export class ResourceRepository implements IResourceRepository {
  private repository: Repository<ResourceEntity>

  constructor() {
    this.repository = getRepository(ResourceEntity)
  }

  persist(resource: Resource): Promise<any> {
    return this.repository
      .createQueryBuilder()
      .insert()
      .values(resource)
      .execute()
  }

  merge(data: Partial<Resource>): void {
    this.repository.createQueryBuilder()
    .update('resource')
    .set(data)
    .where("resource.id = :id", { id: data.id })
    .execute();
  }

  remove(id: number): Promise<any> {
    return this.repository
    .createQueryBuilder('resource')
    .delete()
    .where("resource.id = :id", { id })
    .execute();
  }

  getByCampaign(id: number): Promise<any> {
    return this.repository
    .createQueryBuilder('resource')
    .where("resource.campaign = :campaign", { campaign: id })
    .getMany()
  }

}