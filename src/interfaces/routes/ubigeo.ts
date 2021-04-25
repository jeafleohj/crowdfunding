import Router from 'koa-router'
import { getDistricts, getProvinces, getRegions } from 'interfaces/controllers/ubigeo.controller'

const ubigeoRouter = new Router()

ubigeoRouter.prefix('/ubigeo')

ubigeoRouter
  .get('/regions', getRegions)
  .get('/provinces/:id', getProvinces)
  .get('/districts/:id', getDistricts)

export {
  ubigeoRouter
}
