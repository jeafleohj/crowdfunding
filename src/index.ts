import 'reflect-metadata'
import koa  from 'koa'
import bodyparser from 'koa-bodyparser'
import { createConnection } from 'typeorm'
import logger from 'koa-logger'
import Routes from 'interfaces/routes'
import { userRepository } from 'infrastructure/repository/UserRepositoryTypeOrm'
import { ubigeoRepository } from 'infrastructure/repository/UbigeoRepositoryTypeOrm'
import { campaignRepository } from './infrastructure/repository/CampaignRepositoryTypeOrm';
import { UserRepository } from 'domain/repository/UserRepository'
import { UbigeoRepository } from 'domain/repository/UbigeoRepository'
import { CampaignRepository } from './domain/repository/CampaignRepository';

declare module "koa" {
  interface BaseContext {
    userRepository: UserRepository
    ubigeoRepository: UbigeoRepository
    campaignRepository: CampaignRepository
  }
}

const app = new koa()

createConnection()
  .then(()=>{
    app.context.userRepository = new userRepository()
    app.context.ubigeoRepository = new ubigeoRepository()
    app.context.campaignRepository = new campaignRepository()
  })

// Error handler
app.use(async (ctx, next) => {
	try {
		await next()
  } catch (err) {
    //ctx.status = err.status || 500
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
