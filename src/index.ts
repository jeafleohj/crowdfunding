import 'reflect-metadata'
import koa from 'koa'
import bodyparser from 'koa-bodyparser'
import {createConnection} from 'typeorm'
import logger from 'koa-logger'
import {helloRouter} from 'interfaces/routes/hello'

const app = new koa()

createConnection()

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

app.use(helloRouter.routes())

//app.use(async ctx => {
//  ctx.body = 'Hello World';
//});


app.listen(4000, function(): void {
    console.log('🔥🔥Server running on port 4000🔥🔥');
});
