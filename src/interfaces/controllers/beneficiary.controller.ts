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

const getLocation = async (districtId: number, ctx: Context): Promise<void> => {
    const district = await GetDistrict(districtId, ctx)
    if (district !== undefined){
        console.log(district.provinceId)
        // const provinceId = Number(district.provinceId)
        // const province = await GetProvince(provinceId, ctx)
        // console.log(`${district.id} ${province.id} ${province.regionId}`);
    }
}

const multipleBeneficiary = async (ctx: Context, next: Next): Promise<void> => {

    const filePath = ctx.file.path
    const campaignId = ctx.params.id
    let verifiedBenef = Array<Beneficiary>()
    let errorBenef = Array<BeneficiaryDTO>()

    csv({ delimiter: [";",","]})
    .fromFile(filePath)
    .then((beneficiaries: Array<BeneficiaryDTO>) => {
        beneficiaries.forEach((element: BeneficiaryDTO) => {
            let validatedEl = validate(element)
            if (validatedEl.errors.length > 0) { 
                errorBenef.push(element)
            }
            else {
                const newBeneficiary = validatedEl.newBeneficiary
                const idDistrict = Number(newBeneficiary.district)
                const response = getLocation(idDistrict, ctx)
                // console.log(response);
            }
        });
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
