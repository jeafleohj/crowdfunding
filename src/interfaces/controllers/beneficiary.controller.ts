import { CreateBeneficiary } from 'application/use_cases/beneficiary/CreateBeneficiary'
import { RemoveBeneficiary } from 'application/use_cases/beneficiary/RemoveBeneficiary'
import { UpdateBeneficiary } from 'application/use_cases/beneficiary/UpdateBeneficiary'
import { Beneficiary } from 'domain/entity'
import { Context, Next } from 'koa'
import { BeneficiaryDTO } from 'utils/multipleBeneficiary/BeneficiaryDTO'
import { validate } from 'utils/multipleBeneficiary/ValidateBeneficiary'
import csv from 'csvtojson'
import fs from 'fs'
import { AddBeneficiaryToCampaign } from 'application/use_cases/beneficiaryCampaign'

var errorBenef = Array<any>()
var verifiedBenef = Array<Beneficiary>()

const createBeneficiary = async (ctx: Context, next: Next): Promise<void> => {
  const data = ctx.request.body
  const {id: beneficiaryId} = await CreateBeneficiary(data, ctx)
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

    const filePath = ctx.file.path
    const campaignId = ctx.params.id
    csv({ delimiter: [";", ","] })
        .fromFile(filePath)
        .then(async (beneficiaries: Array<BeneficiaryDTO>) => {
            const response = await Promise.all(beneficiaries.map(el => validateBeneficiary(ctx, el, campaignId)))
            // console.log("beneficiarios validos-> ", verifiedBenef);
            // console.log("beneficiarios erroneos-> ", errorBenef);
            fs.unlinkSync(filePath);
        })

    ctx.body = errorBenef
    ctx.status = 200
    ctx.message = "Archivo cargado correctamente"
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
