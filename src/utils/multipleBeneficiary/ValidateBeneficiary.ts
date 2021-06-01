import { Beneficiary } from './../../domain/entity/Beneficiary';
import { BeneficiaryDTO } from "./BeneficiaryDTO"
import { UbigeoRepository } from 'infrastructure/repository';
import { SimpleConsoleLogger } from 'typeorm';

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

class BeneficiaryOut {
    errors: Array<String>
    beneficiaryData: Beneficiary
}

function validateDNI(dni: string): Boolean {
    const isValid = /^-?\d+$/.test(dni) && dni.length === 8
    return isValid
}

function validateName(name: string): Boolean {
    const isValid = /^[A-Za-z]+$/.test(name) && name.length <= 50
    return isValid
}

function validateAddress(address: string): Boolean {
    const isValid = address.length <= 150
    return isValid
}

function validateGender(gender: string): Boolean {
    const isValid = ['M','F'].includes(gender)
    return isValid
}

function validateNse(nse: string): Boolean {
    const isValid = ['A','B','C','D','E'].includes(nse)
    return isValid
}

function validateAge(age: string): Boolean {
    const isValid = /^-?\d+$/.test(age) && age.length <= 3
    return isValid
}

function validateHdc(handicapped: string): Boolean {
    const isValid = ['1','0'].includes(handicapped)
    return isValid
}

async function validateDistrict(distric: string): Promise<Boolean> {
    let isValid = /^-?\d+$/.test(distric) && distric.length <= 6
    const districId = Number(distric)
    const ubigeoRepo = new UbigeoRepository()
    const district = await ubigeoRepo.getDistrict(districId)
    console.log(district);
    
    isValid = isValid && district !== undefined
    return isValid
}

async function validate(beneficiary: BeneficiaryDTO): Promise<BeneficiaryOut> {
    let errors = Array<String>()
    let newBeneficiary = new BeneficiaryData()

    if (validateDNI(beneficiary.DNI)) newBeneficiary.document = beneficiary.DNI
    else errors.push('El dni debe tener 8 dígitos')
    if (validateName(beneficiary.NOMBRES)) newBeneficiary.name = beneficiary.NOMBRES
    else errors.push('El nombre debe tener solo letras y máximo 50 caracteres')
    if (validateName(beneficiary.APELLIDO_PATERNO)) newBeneficiary.lastname = beneficiary.APELLIDO_PATERNO
    else errors.push('El apellido paterno debe tener solo letras y máximo 50 caracteres')
    if (validateName(beneficiary.APELLIDO_MATERNO)) newBeneficiary.maternal_lastname = beneficiary.APELLIDO_MATERNO
    else errors.push('El apellido materno debe tener solo letras y máximo 50 caracteres')
    if (validateGender(beneficiary.GENERO)) newBeneficiary.sex = beneficiary.GENERO
    else errors.push('El género debe tener solo una letra: M o F')
    if (validateNse(beneficiary.NSE)) newBeneficiary.nse = beneficiary.NSE
    else errors.push('El nivel socioeconómico (NSE) debe tener solo 1 letra: A, B, C, D o E')
    if (validateAge(beneficiary.EDAD)) newBeneficiary.age = Number(beneficiary.EDAD)
    else errors.push('La edad debe ser un número de 3 dígitos como máximo')
    if (validateHdc(beneficiary.DISCAPACITADO)) newBeneficiary.handicapped = Boolean(beneficiary.DISCAPACITADO)
    else errors.push('El flag de discapacitado debe ser 1 si posee alguna discapacidad o 0 en caso contrario')
    if (validateAddress(beneficiary.DIRECCION)) newBeneficiary.address = beneficiary.DIRECCION
    else errors.push('La dirección debe tener solo letras y máximo 150 caracteres ')
    if (validateDistrict(beneficiary.UBIGEO)) newBeneficiary.district = Number(beneficiary.UBIGEO)
    else errors.push('El ubigeo no existe')

    let beneficiaryData = newBeneficiary as Beneficiary
    return { errors, beneficiaryData }
}

export { validate }