import Router from 'koa-router'

const helloRouter = new Router()

helloRouter.prefix(`/test`)

helloRouter
  .get('/', (ctx, next) => {
    ctx.body = {
      holi: "JKJ"
    }
    next()
  })

export {helloRouter}
