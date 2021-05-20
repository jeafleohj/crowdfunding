import { createConnection, getRepository } from 'typeorm'
import { DistrictEntity } from 'infrastructure/orm/typeorm/models/Ubigeo/District'
import { ProvinceEntity } from 'infrastructure/orm/typeorm/models/Ubigeo/Province'
import { RegionEntity } from 'infrastructure/orm/typeorm/models/Ubigeo/Region'
import { districts, provinces, regions } from './ubigeo'

const forEachAsync = (arr: any[], fn: any) =>  arr.reduce(
        (promise, value) => promise.then(() => fn(value)), Promise.resolve()
);
console.log(__dirname+"../infrastructure/orm/typeorm/models/**/*.ts")

createConnection({
  type: "mysql",
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  synchronize: true,
  logging: false,
  entities: [
    __dirname+"/../infrastructure/orm/typeorm/models/**/*.{js,ts}"
  ],
})
  .then(async(connection)=>{
    const rr =  getRepository(RegionEntity)
    const pr = getRepository(ProvinceEntity)
    const dr = getRepository(DistrictEntity)
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
