import { CreateDonation } from 'application/use_cases/donation/CreateDonation'
import { Context, Next } from 'koa'

const createDonation = async (ctx: Context, next: Next): Promise<void> => {
  let data = ctx.request.body
  const response = await CreateDonation(data, ctx)
  ctx.body = {
    error: false,
    data: response,
    status: 200,
    message: 'ok'
  }
  next()

}

export {
  createDonation
}
