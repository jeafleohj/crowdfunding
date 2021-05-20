import { createBeneficiary, multipleBeneficiary, removeBeneficiary, updateBeneficiary } from 'interfaces/controllers/beneficiary.controller'
import { listBeneficaries } from 'interfaces/controllers/campaign.controller'
import jwt from 'koa-jwt'
import Router from 'koa-router'

const beneficiaryRouter = new Router()

beneficiaryRouter.prefix('/beneficiary')

beneficiaryRouter.use(jwt({
  secret: 'Key'
}))

beneficiaryRouter
  .post('/', createBeneficiary)
  .get('/', listBeneficaries)
  .put('/', updateBeneficiary)
  .put('/remove', removeBeneficiary)
  .post('/multiple/:id', multipleBeneficiary)

export {
  beneficiaryRouter
}
