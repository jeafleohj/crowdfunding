import 'reflect-metadata'
import koa from 'koa'
import bodyparser from 'koa-bodyparser'
import {createConnection} from 'typeorm'
import logger from 'koa-logger'
import {userRouter} from 'interfaces/routes/user'
import { userRepository } from 'infrastructure/repository/UserRepositoryTypeOrm'

const app = new koa()

createConnection()

app.context.userRepository = new userRepository()

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

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())


app.listen(4000, function(): void {
  console.log('🔥🔥Server running on port 4000🐈🐈🔥🔥');
});
