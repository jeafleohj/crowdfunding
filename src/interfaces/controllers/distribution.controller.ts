import { UpdateBeneficiaryToCampaign } from 'application/use_cases/beneficiaryCampaign'
import { CreateDistribution } from 'application/use_cases/beneficiaryDonation'
import { ListBeneficiaries } from 'application/use_cases/campaign'
import { ListDonations } from 'application/use_cases/donation'
import { GetDistrict } from 'application/use_cases/ubigeo'
import { Beneficiary, BeneficiaryDonation } from 'domain/entity'
import { StatusBeneficiaryCampaign } from 'domain/entity/BeneficiaryCampaign'
import { Context, Next } from 'koa'
import { forEachAsync } from 'utils/forAsync'
import { prioritize } from 'utils/prioritize'
import { quickSort } from 'utils/quickSort'

const createDistribution = async (ctx: Context) => {
  const { id: campaignId, beneficiaryId } = ctx.params
  const amounts = ctx.request.body as Array<{
    id: number,
    amount: number,
  }>

  let distribution = amounts.map(amount => {
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

  const { id: campaignId } = ctx.params

  let initbeneficiaries = await ListBeneficiaries(campaignId, ctx)
  let initdonations = await ListDonations(campaignId, ctx)
  let beneficiaries: { beneficiaryId: any; campaignId: number; donations: { id: number; amount: number }[] }[] = []

  await forEachAsync(initbeneficiaries, async (el: any) => {
      const district = await GetDistrict(el.beneficiary.district, ctx)
      const clasification = district ? district.clasification : ''
      el.priority = prioritize(el.beneficiary, clasification)
  })

  initbeneficiaries = quickSort(initbeneficiaries, 0, initbeneficiaries.length - 1)

  await forEachAsync(initbeneficiaries, async (el: any) => {
    let donations: { id: number; amount: number }[] = []
    let status = StatusBeneficiaryCampaign.rejected

    initdonations.forEach(donation => {
      let amount = donation.collected - donation.amountByBeneficiary
      donation.collected = Math.max(amount,0)
      amount = amount >= 0 ? donation.amountByBeneficiary : donation.collected
      status = (status === StatusBeneficiaryCampaign.rejected && amount === 0) ? StatusBeneficiaryCampaign.rejected : StatusBeneficiaryCampaign.selected
      donations.push({
        id: donation.id,
        amount,
      })
    })
    const payload = {
      beneficiaryId: el.id,
      campaignId: parseInt(campaignId),
      priority: el.priority,
      status,
      donations,
    }
    beneficiaries.push(payload)
    console.log(payload)
    // return await UpdateBeneficiaryToCampaign(payload, ctx)
  })

  let plain = beneficiaries.flatMap( arr => {
    return arr.donations.map( donation => {
        return {
            amount: donation.amount,
            donationId: donation.id,
            beneficiaryId: arr.beneficiaryId,
            campaignId: parseInt(campaignId),
        }
    })
  }) as Array<BeneficiaryDonation>

  // await CreateDistribution(plain, ctx)

  ctx.status = 200

}

export {
  createDistribution,
  generateDistribution,
}
