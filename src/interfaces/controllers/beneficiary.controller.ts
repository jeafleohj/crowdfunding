import { CreateBeneficiary } from 'application/use_cases/beneficiary/CreateBeneficiary'
import { RemoveBeneficiary } from 'application/use_cases/beneficiary/RemoveBeneficiary'
import { UpdateBeneficiary } from 'application/use_cases/beneficiary/UpdateBeneficiary'
import { Beneficiary, Campaign } from 'domain/entity'
import { Context, Next } from 'koa'

const createBeneficiary = async (ctx: Context, next: Next): Promise<void> => {
  let data = ctx.request.body
  let beneficiary = new Beneficiary(data)
  let campaignId: number = data.campaign as number
  beneficiary.campaign = new Campaign({id: campaignId})
  const response = await CreateBeneficiary(beneficiary, ctx)
  ctx.body = {
    error: false,
    data: response.beneficiaries,
    status: 200,
    message: 'ok'
  }
  next()
}

const updateBeneficiary = async (ctx: Context, next: Next): Promise<void> => {
  let data = ctx.request.body
  const response = await UpdateBeneficiary(data, ctx)
  ctx.body = response
  ctx.status = 200
  next()
}

const removeBeneficiary = async (ctx: Context, next: Next): Promise<void> => {
  const data = ctx.request.body
  const campaignId: number = data.campaign
  const beneficiaryId: number = data.id
  const response = await RemoveBeneficiary(beneficiaryId, campaignId, ctx)
  ctx.body = response
  ctx.status = 200
  next()
}

export {
  createBeneficiary,
  updateBeneficiary,
  removeBeneficiary
}
