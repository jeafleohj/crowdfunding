import Router from 'koa-router'
import { getProvinces, getRegions } from 'interfaces/controllers/ubigeo.controller'

const ubigeoRouter = new Router()

ubigeoRouter.prefix('/ubigeo')

ubigeoRouter
  .get('/regions', getRegions)
  .get('/provinces/:id', getProvinces)

export {
  ubigeoRouter
}
