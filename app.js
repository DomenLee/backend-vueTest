const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const index = require('./routes/index')

app
  .use(index.routes())
  .use(router.allowedMethods())

app.listen(3000)