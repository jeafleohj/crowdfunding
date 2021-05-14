import 'reflect-metadata'
import koa  from 'koa'
import bodyparser from 'koa-bodyparser'
import logger from 'koa-logger'
import cors from '@koa/cors'
import { createConnection } from 'typeorm'
import Routes from 'interfaces/routes'
import {
  BeneficiaryRepository,
  CampaignRepository,
  CampaignEventRepository,
  DonationRepository,
  TokenBlacklistingRepository,
  UbigeoRepository,
  UserRepository,
  VolunteerRepository,
} from 'infrastructure/repository'
import {
  IBeneficiaryRepository,
  ICampaignRepository,
  ICampaingEventRepository,
  IDonationRepository,
  ITokenBlacklistingRepository,
  IUbigeoRepository,
  IUserRepository,
  IVolunteerRepository,
} from 'domain/repository'

declare module "koa" {
  interface BaseContext {
    beneficiaryRepository: IBeneficiaryRepository
    campaignRepository: ICampaignRepository
    campaignEventRepository: ICampaingEventRepository
    donationRepository: IDonationRepository
    tokenBlacklistingRepository: ITokenBlacklistingRepository
    ubigeoRepository: IUbigeoRepository
    userRepository: IUserRepository
    volunteerRepository: IVolunteerRepository
  }
}

const app = new koa()

app.use(cors({
	origin: () => "*",
	allowHeaders: ['etag', 'Content-Type', 'X-Requested-With', 'Accept', 'Origin', 'Authorization'],
	credentials: true
}))

createConnection({
  type: "mysql",
  host: "localhost",
  database: "crowdfunding",
  username: "root",
  password: "password",
  synchronize: true,
  logging: false,
  entities: [
    __dirname+"/infrastructure/orm/typeorm/models/**/*.{js,ts}"
  ],
})
  .then((): void=>{
    app.context.beneficiaryRepository = new BeneficiaryRepository()
    app.context.campaignRepository = new CampaignRepository()
    app.context.donationRepository = new DonationRepository()
    app.context.tokenBlacklistingRepository = new TokenBlacklistingRepository()
    app.context.ubigeoRepository = new UbigeoRepository()
    app.context.userRepository = new UserRepository()
    app.context.volunteerRepository = new VolunteerRepository()
    app.context.campaignEventRepository =  new CampaignEventRepository()
  })

app.use(async (ctx, next) => {
	try {
		await next()
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = err.message || 'Error interno'
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
