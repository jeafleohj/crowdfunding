import Router from 'koa-router'
import {User} from 'domain/User'

const helloRouter = new Router()

helloRouter.prefix(`/test`)

helloRouter
  .get('/', (ctx, next) => {
    console.log(User)
    ctx.body = {
      holi: "JKJ"
    }
    next()
  })

export {helloRouter}
