import { UpdateBeneficiaryToCampaign } from 'application/use_cases/beneficiaryCampaign'
import { CreateDistribution } from 'application/use_cases/beneficiaryDonation'
import { Beneficiary, BeneficiaryDonation } from 'domain/entity'
import { StatusBeneficiaryCampaign } from 'domain/entity/BeneficiaryCampaign'
import { Context, Next } from 'koa'
import { forEachAsync } from 'utils/forAsync'

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

const generateDistribution = async (ctx: Context) => {
  const { id:campaignId } = ctx.params

  const beneficiaries = ctx.request.body as Array<{
    id: number,
    status: StatusBeneficiaryCampaign,
    donations: Array<{ id: number, amount: number }>
  }>

  let plain = beneficiaries.flatMap( arr => {
    return arr.donations.map( donation => {
        return {
            amount: donation.amount,
            donationId: donation.id,
            beneficiaryId: arr.id,
            campaignId: parseInt(campaignId),
        }
    })
  }) as Array<BeneficiaryDonation>

  await CreateDistribution(plain, ctx)

  await forEachAsync (beneficiaries, async (el: any) => {
    const payload = {
      beneficiaryId: el.id,
      campaignId: parseInt(campaignId),
      status: el.status,
    }
    return await UpdateBeneficiaryToCampaign(payload, ctx)
  })

  ctx.status = 200

}

export {
  createDistribution,
  generateDistribution,
}
