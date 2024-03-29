import { CreateBeneficiary } from 'application/use_cases/beneficiary/CreateBeneficiary'
import { RemoveBeneficiaryFromCampaign, UpdateBeneficiaryToCampaign } from 'application/use_cases/beneficiaryCampaign'
import { UpdateBeneficiary } from 'application/use_cases/beneficiary/UpdateBeneficiary'
import { Beneficiary, BeneficiaryDonation } from 'domain/entity'
import { Context, Next } from 'koa'
import { BeneficiaryDTO } from 'utils/multipleBeneficiary/BeneficiaryDTO'
import { validate } from 'utils/multipleBeneficiary/ValidateBeneficiary'
import csv from 'csvtojson'
import fs from 'fs'
import { AddBeneficiaryToCampaign } from 'application/use_cases/beneficiaryCampaign'
import { DeliverDonations } from 'application/use_cases/beneficiaryDonation/DeliverDonation'
import { StatusBeneficiaryCampaign } from 'domain/entity/BeneficiaryCampaign'

var errorBenef = Array<any>()
var verifiedBenef = Array<Beneficiary>()

const createBeneficiary = async (ctx: Context, next: Next): Promise<void> => {
  const data = ctx.request.body
  const { id: beneficiaryId } = await CreateBeneficiary(data, ctx)
  const campaignId = data.campaign
  await AddBeneficiaryToCampaign(beneficiaryId, campaignId, ctx)
  ctx.status = 200
}

async function validateBeneficiary(ctx: Context, item: BeneficiaryDTO, campaignId: number) {
  let validatedEl = await validate(item)
  if (validatedEl.errors.length > 0) {
    errorBenef.push({ ...item, errors: validatedEl.errors })
  }
  else {
    const newBeneficiary = validatedEl.beneficiaryData
    newBeneficiary.campaign = campaignId
    verifiedBenef.push(newBeneficiary)
    const {id: beneficiaryId} = await CreateBeneficiary(newBeneficiary, ctx)
    await AddBeneficiaryToCampaign(beneficiaryId, campaignId, ctx)
  }
}

const multipleBeneficiary = async (ctx: Context, next: Next): Promise<void> => {

  errorBenef = []
  verifiedBenef = []
  const filePath = ctx.file.path
  const campaignId = ctx.params.campaignId
  console.log('cenefociary controller ->', campaignId)
  const rawcsv = await csv({ delimiter: [";", ","] }).fromFile(filePath)
  const response = await Promise.all(rawcsv.map(el => validateBeneficiary(ctx, el, campaignId)))
  fs.unlinkSync(filePath);

  ctx.body = errorBenef
  ctx.status = 200
  ctx.message = `Registros exitosos: ${verifiedBenef.length}. Registros con mal formato: ${errorBenef.length}`
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
  const beneficiaryId = data.id
  const campaignId = data.campaign
  const response = await RemoveBeneficiaryFromCampaign(beneficiaryId, campaignId, ctx)
  ctx.body = response
  ctx.status = 200
}

const deliverBeneficiaryDonations = async (ctx: Context): Promise<void> => {
  const beneficiaryId = ctx.params.beneficiaryId
  const campaignId = ctx.params.campaignId
  const donations = ctx.request.body as Array<BeneficiaryDonation>
  const response = await DeliverDonations(donations, ctx)

  await UpdateBeneficiaryToCampaign({
      beneficiaryId,
      campaignId,
      status: StatusBeneficiaryCampaign.attended,
    }, ctx)

  ctx.status = 200
}

export {
  createBeneficiary,
  updateBeneficiary,
  removeBeneficiary,
  multipleBeneficiary,
  deliverBeneficiaryDonations
}
