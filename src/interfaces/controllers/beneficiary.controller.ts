import { CreateBeneficiary } from 'application/use_cases/beneficiary/CreateBeneficiary'
import { RemoveBeneficiary } from 'application/use_cases/beneficiary/RemoveBeneficiary'
import { UpdateBeneficiary } from 'application/use_cases/beneficiary/UpdateBeneficiary'
import { Beneficiary } from 'domain/entity'
import { Context, Next } from 'koa'
import { SimpleConsoleLogger } from 'typeorm'
const csv = require('csvtojson')
const fs = require('fs');

class BeneficiaryDTO {
    DNI: string
    NOMBRES: string
    APELLIDO_PATERNO: string
    APELLIDO_MATERNO: string
    GENERO: string
    NSE: string
    EDAD: number
    DISCAPACITADO: string
    UBIGEO: number
    DIRECCION: string
}
class BeneficiaryData {
    name: string
    lastname: string
    maternal_lastname: string
    sex: string
    nse: string
    document: string
    age: number
    district?: number
    province?: number
    region?: number
    address: string
    handicapped: boolean
    campaign?: number
}

function validateDNI(dni: string): Boolean {
    const isNumber = new RegExp(/^\d{10}$/)
    const isValid = isNumber.test(dni) && dni.length === 8
    console.log(isNumber.test(dni))
    return isValid
}

function validate(beneficiary: BeneficiaryDTO): Object {
    const errors = []
    const newBeneficiary = new BeneficiaryData()
    if (validateDNI(beneficiary.DNI)) newBeneficiary.document = beneficiary.DNI
    else errors.push('El dni debe tener 8 dígitos') 
    return errors
}

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

const multipleBeneficiary = async (ctx: Context, next: Next): Promise<void> => {

    const filePath = ctx.file.path
    const campaignId = ctx.params.id
    const validatedBenef = []

    csv({ delimiter: [";",","]})
    .fromFile(filePath)
    .then((beneficiaries: Array<BeneficiaryDTO>) => {
        beneficiaries.forEach((element: BeneficiaryDTO) => {
            let validatedEl = validate(element)
            // console.log(validatedEl)
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
