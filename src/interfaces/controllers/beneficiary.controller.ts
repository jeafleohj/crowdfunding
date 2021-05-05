import { CreateBeneficiary } from 'application/use_cases/beneficiary/CreateBeneficiary'
import { GetByDocument } from 'application/use_cases/beneficiary/GetByDocument'
import { Context, Next } from 'koa'

const createBeneficiary = async (ctx: Context, next: Next): Promise<void> => {
  let data = ctx.request.body
  
  // const beneficiary = await GetByDocument(data.document, ctx)
  // console.log(beneficiary)

  const response = await CreateBeneficiary(data, ctx)
  ctx.body = {
    error: false,
    data: response.beneficiaries,
    status: 200,
    message: 'ok'
  }
  next()

}

export {
  createBeneficiary
}
