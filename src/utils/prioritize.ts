import { Beneficiary } from "domain/entity"

//cambiar escalas del 1 al 5 y multiplicarlas
const prioritize = function (beneficiary: Beneficiary, clasification: string): number {
  const age = beneficiary.age
  const gender = beneficiary.sex
  const handicapped = beneficiary.handicapped
  const nse = beneficiary.nse
  clasification = clasification.toLocaleLowerCase()

  let e  = 0
  let g = 0
  let h = 0
  let ns = 0
  let u = 0

  switch(true) {
    case (age <= 11): {
      e = 5;
      break;
    }
    case (12 <= age && age <= 17): {
      e = 4;
      break;
    }
    case (18 <= age && age <= 29): {
      e = 3;
      break;
    }
    case (30 <= age && age <= 59): {
      e = 4;
      break;
    }
    case (60 <= age): {
      e = 5;
      break;
    }
  }

  switch(gender){
    case ('F' || 'Femenino'): {
      g = 4;
      break;
    }
    case ('M' || 'Masculino'): {
      g = 2;
      break;
    }
  }

  switch(handicapped){
    case (false): {
      h = 5;
      break;
    }
    case (true): {
      h = 1;
      break;
    }
  }

  switch(nse){
    case ('A'): {
      ns = 1;
      break;
    }
    case ('B'): {
      ns = 2;
      break;
    }
    case ('C'): {
      ns = 3;
      break;
    }
    case ('D'): {
      ns = 4;
      break;
    }
    case ('E'): {
      ns = 5;
      break;
    }
  }

  switch(clasification){
    case ('pobre extremo'): {
      u = 5;
      break;
    }
    case ('pobre no extremo'): {
      u = 3;
      break;
    }
    case ('no pobre'): {
      u = 1;
      break;
    }
  }

  return e * g * h * ns * u
}

export { prioritize }