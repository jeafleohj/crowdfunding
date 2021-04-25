import { createConnection, getRepository } from 'typeorm'
import { District } from 'infrastructure/orm/typeorm/models/Ubigeo/District'
import { Province } from 'infrastructure/orm/typeorm/models/Ubigeo/Province'
import { Region } from 'infrastructure/orm/typeorm/models/Ubigeo/Region'
import { districts, provinces, regions } from './ubigeo'
//const region = getRepository(Region)
//const district = getRepository(District)
//const province = getRepository(Province)

const forEachAsync = (arr: any[], fn: any) =>  arr.reduce(
        (promise, value) => promise.then(() => fn(value)), Promise.resolve()
);

createConnection()
  .then(async(connection)=>{
    const rr =  getRepository(Region)
    const pr = getRepository(Province)
    const dr = getRepository(District)
    await forEachAsync (regions, async (el: any) => {
      const region = rr.create(el)
      return await rr.save(region)
    })

    await forEachAsync (provinces, async (el: any) => {
      const region = pr.create(el)
      return await pr.save(region)
    })

    await forEachAsync (districts, async (el: any) => {
      const district = dr.create(el)
      await dr.save(district)
    })

    await connection.close()
  })
