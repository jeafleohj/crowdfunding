import 'reflect-metadata'
import koa  from 'koa'
import bodyparser from 'koa-bodyparser'
import logger from 'koa-logger'
import cors from '@koa/cors'
import { createConnection } from 'typeorm'
import Routes from 'interfaces/routes'
import { userRepository } from 'infrastructure/repository/UserRepositoryTypeOrm'
import { ubigeoRepository } from 'infrastructure/repository/UbigeoRepositoryTypeOrm'
import { campaignRepository } from './infrastructure/repository/CampaignRepositoryTypeOrm';
import { UserRepository } from 'domain/repository/UserRepository'
import { UbigeoRepository } from 'domain/repository/UbigeoRepository'
import { CampaignRepository } from './domain/repository/CampaignRepository';
import { BeneficiaryRepository } from './domain/repository/BeneficiaryRepository';
import { beneficiaryRepository } from 'infrastructure/repository/BeneficiaryRepository'

declare module "koa" {
  interface BaseContext {
    beneficiaryRepository: BeneficiaryRepository
    campaignRepository: CampaignRepository
    ubigeoRepository: UbigeoRepository
    userRepository: UserRepository
  }
}

const app = new koa()

app.use(cors({
	origin: () => "*",
	allowHeaders: ['etag', 'Content-Type', 'X-Requested-With', 'Accept', 'Origin', 'Authorization'],
	credentials: true
}))

createConnection()
  .then(()=>{
    app.context.userRepository = new userRepository()
    app.context.ubigeoRepository = new ubigeoRepository()
    app.context.campaignRepository = new campaignRepository()
    app.context.beneficiaryRepository = new beneficiaryRepository()
  })

// Error handler
app.use(async (ctx, next) => {
	try {
		await next()
  } catch (err) {
    ctx.status = err.status || 500
    //ctx.body = err.message || 'Error interno'
    console.log(err)
  }
})

app.use(bodyparser())
app.use(logger())

app.use(Routes.routes())
app.use(Routes.allowedMethods())


app.listen(4000, function(): void {
  console.log('🔥🔥Server running on port 4000🐈🐈🔥🔥');
});
