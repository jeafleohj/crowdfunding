import { createBeneficiary, deliverBeneficiaryDonations, multipleBeneficiary, removeBeneficiary, updateBeneficiary } from 'interfaces/controllers/beneficiary.controller'
import { listBeneficaries } from 'interfaces/controllers/campaign.controller'
import jwt from 'koa-jwt'
import multer from '@koa/multer'
import Router from 'koa-router'

const upload = multer({ dest: 'tmp/csv' })
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
  .post('/multiple/:id', upload.single('csv'), multipleBeneficiary)
  .put('/:beneficiaryId/donation/:campaignId', deliverBeneficiaryDonations)

export {
  beneficiaryRouter
}
