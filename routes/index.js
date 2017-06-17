const router = require('koa-router')()

router.get('/user', async (ctx, next) => {
  let usr = {
    name: '张三',
    age: '18',
    type: '普通用户',
  }
  
  ctx.body = usr
})

module.exports = router