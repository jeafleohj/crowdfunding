import { createResource } from 'interfaces/controllers/campaign.controller'
import { listResources, removeResource } from 'interfaces/controllers/resource.controller'
import Router from 'koa-router'

const resourceRouter = new Router()

resourceRouter.prefix('/resource')

resourceRouter
  .post('/campaign/:id', createResource)
  .get('/campaign/:id', listResources)
  .put('/:id', removeResource)

export {
  resourceRouter
}
