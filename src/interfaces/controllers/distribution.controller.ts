import { CreateDistribution } from 'application/use_cases/beneficiaryDonation'
import { Beneficiary, BeneficiaryDonation } from 'domain/entity'
import { Context, Next } from 'koa'

const createDistribution = async (ctx: Context) => {
  const { id:campaignId, beneficiaryId } = ctx.params
  const amounts = ctx.request.body as Array<{
    id: number,
    amount: number,
  }>

  let distribution = amounts.map( amount => {
    return {
      amount: amount.amount,
      donationId: amount.id,
      beneficiaryId: parseInt(beneficiaryId),
      campaignId: parseInt(campaignId),
    }
  }) as Array<BeneficiaryDonation>

  const response = await CreateDistribution(distribution, ctx)
  ctx.data = response
  ctx.status = 200
}

export {
  createDistribution,
}
