import { createBeneficiary } from 'interfaces/controllers/beneficiary.controller'
import jwt from 'koa-jwt'
import Router from 'koa-router'

const beneficiaryRouter = new Router()

beneficiaryRouter.prefix('/user')

beneficiaryRouter.use(jwt({
  secret: 'Key'
}))

beneficiaryRouter
  .post('/beneficiary', createBeneficiary)

export {
  beneficiaryRouter
}
