import 'reflect-metadata'
import koa  from 'koa'
import bodyparser from 'koa-bodyparser'
import { createConnection } from 'typeorm'
import logger from 'koa-logger'
import Routes from 'interfaces/routes'
import { userRepository } from 'infrastructure/repository/UserRepositoryTypeOrm'
import { UserRepository } from 'domain/repository/UserRepository'

declare module "koa" {
  interface BaseContext {
    userRepository: UserRepository
  }
}

const app = new koa()

createConnection()
  .then(()=>{
    app.context.userRepository = new userRepository()
  })

// Error handler
app.use(async (ctx, next) => {
	try {
		await next()
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = err.message || 'Error interno'
  }
})

app.use(bodyparser())
app.use(logger())

app.use(Routes.routes())
app.use(Routes.allowedMethods())


app.listen(4000, function(): void {
  console.log('🔥🔥Server running on port 4000🐈🐈🔥🔥');
});
