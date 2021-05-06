import { createBeneficiary, removeBeneficiary, updateBeneficiary } from 'interfaces/controllers/beneficiary.controller'
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

export {
  beneficiaryRouter
}
