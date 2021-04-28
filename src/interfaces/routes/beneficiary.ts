import { createBeneficiary } from 'interfaces/controllers/beneficiary.controller'
import { listBeneficaries  } from 'interfaces/controllers/campaign.controller'
import jwt from 'koa-jwt'
import Router from 'koa-router'

const beneficiaryRouter = new Router()

beneficiaryRouter.prefix('/beneficiary')

beneficiaryRouter.use(jwt({
  secret: 'Key'
}))

beneficiaryRouter
  .get('/', listBeneficaries)
  .post('/', createBeneficiary)

export {
  beneficiaryRouter
}
