import { CreateBeneficiary } from 'application/use_cases/beneficiary/CreateBeneficiary'
import { RemoveBeneficiary } from 'application/use_cases/beneficiary/RemoveBeneficiary'
import { UpdateBeneficiary } from 'application/use_cases/beneficiary/UpdateBeneficiary'
import { GetDistrict, GetProvince } from 'application/use_cases/ubigeo'
import { Beneficiary } from 'domain/entity'
import { Context, Next } from 'koa'
import { BeneficiaryDTO } from 'utils/multipleBeneficiary/BeneficiaryDTO'
import { validate } from 'utils/multipleBeneficiary/ValidateBeneficiary'
const csv = require('csvtojson')
const fs = require('fs');

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

async function validateBeneficiary(item: BeneficiaryDTO) {
    let validatedEl = await validate(item)
    if (validatedEl.errors.length > 0) {
        return { error: item }
    }
    else {
        const newBeneficiary = validatedEl.beneficiaryData
        return { beneficiary: newBeneficiary}
    }
}

const multipleBeneficiary = async (ctx: Context, next: Next): Promise<void> => {

    const filePath = ctx.file.path
    const campaignId = ctx.params.id
    var verifiedBenef = Array<Beneficiary>()
    var errorBenef = Array<BeneficiaryDTO>()

    csv({ delimiter: [";", ","] })
        .fromFile(filePath)
        .then(async (beneficiaries: Array<BeneficiaryDTO>) => {
            const response = await Promise.all(
                beneficiaries.map(validateBeneficiary)
            )
            console.log("beneficiarios validos-> ", response);
            fs.unlinkSync(filePath);
        })

    // console.log(ctx.file.buffer.toString('utf-8'))
    // const response = await CreateBeneficiary(data, ctx)
    // ctx.body = response.beneficiaries
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
