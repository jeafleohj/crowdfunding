import { CreateBeneficiary } from 'application/use_cases/beneficiary/CreateBeneficiary'
import { RemoveBeneficiary } from 'application/use_cases/beneficiary/RemoveBeneficiary'
import { UpdateBeneficiary } from 'application/use_cases/beneficiary/UpdateBeneficiary'
import { Context, Next } from 'koa'

const createBeneficiary = async (ctx: Context, next: Next): Promise<void> => {
  let data = ctx.request.body

  const response = await CreateBeneficiary(data, ctx)
  ctx.body = {
    error: false,
    data: response.beneficiaries,
    status: 200,
    message: 'ok'
  }
  next()
}

const multipleBeneficiary = async (ctx: Context, next: Next): Promise<void> => {

  // let data = ctx.request.files.file
  // console.log(data)

  const campaignId = ctx.params.id
  // const response = await CreateBeneficiary(data, ctx)
  // ctx.body = response.beneficiaries
  ctx.status = 200
}

const updateBeneficiary = async (ctx: Context, next: Next): Promise<void> => {
  let data = ctx.request.body
  const response = await UpdateBeneficiary(data, ctx)
  ctx.body = response
  ctx.status = 200
  next()
}

const removeBeneficiary = async (ctx: Context, next: Next): Promise<void> => {
  let data = ctx.request.body
  const response = await RemoveBeneficiary(data, ctx)
  ctx.body = response
  ctx.status = 200
  next()
}

export {
  createBeneficiary,
  updateBeneficiary,
  removeBeneficiary,
  multipleBeneficiary
}
