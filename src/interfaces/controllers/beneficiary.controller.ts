import { CreateBeneficiary } from 'application/use_cases/beneficiary/CreateBeneficiary'
import { Context, Next } from 'koa'

const createBeneficiary = async (ctx: Context, next: Next): Promise<void> => {
  let data = ctx.request.body
  const response = await CreateBeneficiary(data, ctx)
  ctx.body = {
    error: false,
    data: response,
    status: 200,
    message: 'ok'
  }
  next()

}

export {
  createBeneficiary
}
