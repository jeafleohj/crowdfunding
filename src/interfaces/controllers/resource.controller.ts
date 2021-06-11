import { Context, Next } from 'koa'
import { CreateResource } from 'application/use_cases/resource/CreateResource'
import { ListResources } from 'application/use_cases/resource/ListResources'
import { RemoveResource } from 'application/use_cases/resource/RemoveResource'

const createResource = async (ctx: Context) => {
  const data = ctx.request.body
  const resource = await CreateResource(data, ctx)
  ctx.status = 200
}

const listResources = async (ctx: Context) => {
  const campaignId = ctx.params.id
  const resources = await ListResources(campaignId, ctx)
  ctx.body = resources
  ctx.status = 200
}

const removeResource = async (ctx: Context) => {
  const resourceId = ctx.params.id
  const response = await RemoveResource(resourceId, ctx)
  ctx.body = response
  ctx.status = 200
}

export {
  createResource,
  listResources,
  removeResource,
}
