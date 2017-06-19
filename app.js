const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const index = require('./routes/index')
const cors = require('koa-cors')

app.use(cors())

app
  .use(index.routes())
  .use(router.allowedMethods())

app.listen(3000)