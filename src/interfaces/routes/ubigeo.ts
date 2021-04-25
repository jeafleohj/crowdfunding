import Router from 'koa-router'
import { getRegions } from 'interfaces/controllers/ubigeo.controller'

const ubigeoRouter = new Router()

ubigeoRouter.prefix('/ubigeo')

ubigeoRouter
  .get('/regions', getRegions)

export {
  ubigeoRouter
}
