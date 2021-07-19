import { ErrorHandler } from 'application/error'
import { UpdateBeneficiary } from 'application/use_cases/beneficiary/UpdateBeneficiary'
import { UpdateBeneficiaryStatus, UpdateBeneficiaryToCampaign } from 'application/use_cases/beneficiaryCampaign'
import {
  CreateDistribution,
  GetCurrentDistribution,
  GetDistribution,
  GetDistributionByBeneficiary,
  UpdateAmount,
} from 'application/use_cases/beneficiaryDonation'
import { ListBeneficiaries } from 'application/use_cases/campaign'
import { DistributedCampaign } from 'application/use_cases/campaign/DistributedCampaign'
import { ListDonations } from 'application/use_cases/donation'
import { GetDistrict } from 'application/use_cases/ubigeo'
import { BeneficiaryDonation } from 'domain/entity'
import { BeneficiaryCampaign, StatusBeneficiaryCampaign } from 'domain/entity/BeneficiaryCampaign'
import { Context } from 'koa'
import { forEachAsync } from 'utils/forAsync'
import { prioritize } from 'utils/prioritize'
import { quickSort } from 'utils/quickSort'

const createDistribution = async (ctx: Context) => {
  const { campaignId, beneficiaryId } = ctx.params
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

  const { campaignId } = ctx.params

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
      beneficiaryId: el.beneficiary.id,
      campaignId: parseInt(campaignId),
      priority: el.priority,
      status,
    }
    beneficiaries.push({...payload, donations})
    return await UpdateBeneficiaryToCampaign(payload, ctx)
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

  await CreateDistribution(plain, ctx)
  await DistributedCampaign(campaignId, ctx)
  ctx.status = 200

}

const getDistributionBeneficiary = async (ctx: Context) => {
  const { campaignId, beneficiaryId } = ctx.params
  const response = await GetDistribution(campaignId, beneficiaryId, ctx) //donaciones asignadas por beneficiario
  ctx.body = response
  ctx.status = 200
}

const getDistribution = async (ctx: Context) => {
  const { campaignId } = ctx.params
  let campaignBeneficiary = await ListBeneficiaries(campaignId, ctx)
  let beneficiary = campaignBeneficiary.flatMap( (cb: any) => {
    delete cb.beneficiary.createdAt
    delete cb.beneficiary.updateAt
    let { beneficiary } = cb
    delete cb.beneficiary
    return { ...cb, ...beneficiary }
  })

  let currentDistribution = await GetCurrentDistribution(campaignId, ctx)
  let listDonations = await ListDonations(campaignId, ctx) as Array<{
    id: number,
    name: string,
    collected: number,
  }>

  const leftassign = listDonations.map((el) => {
    const donation = currentDistribution.find(dist => dist.donationId === el.id)
    const amount = donation?.total
    return {
      id: el.id,
      name: el.name,
      leftasign: Math.max(el.collected - Number(amount), 0)
    }
  })

  ctx.body = { beneficiary, leftassign }
}

const updateDistributionByBeneficiary = async (ctx: Context) => {
  const { campaignId, beneficiaryId } = ctx.params
  const amounts = ctx.request.body as Array<{
    donationId: number,
    amount: number,
  }>

  let notValids = amounts.map( el => el.amount == 0 ? true : false )
  let valid = notValids.reduce((prev, el) => prev && el, true)

  if( valid ) {
    throw new ErrorHandler({
      status: 400,
      message: 'Todos los campos son ceros',
    })
  }

  let distribution = amounts.map(amount => {
    return {
      amount: amount.amount,
      donationId: amount.donationId,
      beneficiaryId: parseInt(beneficiaryId),
      campaignId: parseInt(campaignId),
    }
  }) as Array<BeneficiaryDonation>

  let currentDistribution = await GetCurrentDistribution(campaignId, ctx)
  let beneficiaryDistribution = await GetDistributionByBeneficiary(beneficiaryId, campaignId, ctx)

  let listDonations = await ListDonations(campaignId, ctx) as Array<{
    id: number,
    collected: number,
  }>

  amounts.sort((a,b) => a.donationId>b.donationId ? 1:-1)
  listDonations.sort((a,b) => a.id>b.id ? 1:-1)

  let rest = currentDistribution.map((el, index) => {
    let newAmount = el.total - beneficiaryDistribution[index].amount + amounts[index].amount
    let collected = listDonations[index].collected
    if ( newAmount > collected )  {
      throw new ErrorHandler({
        status: 400,
        message: 'Valores incorrectos',
      })
    }
    return {
      donationId: el.donationId,
      amount: collected - newAmount,
    }
  })

  await forEachAsync(distribution, async (el: {beneficiaryId: number,amount: number, donationId: number}) => {
    await UpdateAmount(el.beneficiaryId, el.donationId, el.amount, ctx)
  })

  await UpdateBeneficiaryStatus(beneficiaryId, campaignId, StatusBeneficiaryCampaign.selected, ctx)

  ctx.body = rest
  ctx.status = 200

}

const deleteDistribution = async (ctx: Context) => {
  const { campaignId, beneficiaryId } = ctx.params

  let currentDistribution = await GetCurrentDistribution(campaignId, ctx)
  let beneficiaryDistribution = await GetDistributionByBeneficiary(beneficiaryId, campaignId, ctx)
  let listDonations = await ListDonations(campaignId, ctx) as Array<{
    id: number,
    collected: number,
  }>

  let rest = currentDistribution.map((el, index) => {
    let newAmount = el.total - beneficiaryDistribution[index].amount
    let collected = listDonations[index].collected

    if ( newAmount >= collected ) throw new ErrorHandler({
      status: 400,
      message: 'Valores incorrectos',
    })

    return {
      donationId: el.donationId,
      amount: collected - newAmount,
    }
  })
  console.log(beneficiaryDistribution)

  await forEachAsync(beneficiaryDistribution, async (el: any) => {
    await UpdateAmount(beneficiaryId, el.donationId, 0, ctx)
  })

  await UpdateBeneficiaryStatus(beneficiaryId, campaignId, StatusBeneficiaryCampaign.rejected, ctx)

  ctx.body = rest
}

export {
  createDistribution,
  deleteDistribution,
  generateDistribution,
  getDistribution,
  getDistributionBeneficiary,
  updateDistributionByBeneficiary,
}
