import 'reflect-metadata'
import koa from 'koa'
import bodyparser from 'koa-bodyparser'
import {createConnection} from 'typeorm'
//import {User} from './entity/User'

const app = new koa()

app.use(bodyparser)

createConnection()
//    .then(async () => {
//        const usuario = getRepository(User)
//        const newuser = usuario.create({firstName: "V", lastName: "V"})
//        await usuario.save(newuser)
//        let result = await getRepository('User').find()
//        console.log(result)
//    })


app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(4003, function(): void {
    console.log('Server running on https://localhost:4003 GGWP');
});
