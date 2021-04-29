import 'reflect-metadata'
import koa  from 'koa'
import bodyparser from 'koa-bodyparser'
import logger from 'koa-logger'
import cors from '@koa/cors'
import { createConnection } from 'typeorm'
import Routes from 'interfaces/routes'
import { UserRepository } from 'infrastructure/repository/UserRepositoryTypeOrm'
import { UbigeoRepository } from 'infrastructure/repository/UbigeoRepositoryTypeOrm'
import { CampaignRepository } from './infrastructure/repository/CampaignRepositoryTypeOrm';
import { IUserRepository } from 'domain/repository/UserRepository'
import { IUbigeoRepository } from 'domain/repository/UbigeoRepository'
import { ICampaignRepository } from './domain/repository/CampaignRepository';
import { IBeneficiaryRepository } from './domain/repository/BeneficiaryRepository';
import { BeneficiaryRepository } from 'infrastructure/repository/BeneficiaryRepository'
import { IDonationRepository } from './domain/repository/DonationRepository';
import { DonationRepository } from './infrastructure/repository/DonationRepository';
import { ITokenBlacklistingRepository } from 'domain/repository/TokenBlacklisting'
import { BlackListTokenRepository } from 'infrastructure/repository/TokenBlacklistingRepositoryTypeOrm'


declare module "koa" {
  interface BaseContext {
    beneficiaryRepository: IBeneficiaryRepository
    campaignRepository: ICampaignRepository
    donationRepository: IDonationRepository
    tokenBlacklistingRepository: ITokenBlacklistingRepository
    ubigeoRepository: IUbigeoRepository
    userRepository: IUserRepository
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
    app.context.beneficiaryRepository = new BeneficiaryRepository()
    app.context.campaignRepository = new CampaignRepository()
    app.context.donationRepository = new DonationRepository()
    app.context.tokenBlacklistingRepository = new BlackListTokenRepository()
    app.context.ubigeoRepository = new UbigeoRepository()
    app.context.userRepository = new UserRepository()
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
