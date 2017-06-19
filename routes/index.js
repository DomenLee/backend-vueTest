const router = require('koa-router')()

router.get('/user', async (ctx, next) => {
  let usr = {
    name: '李长安',
    age: '1890090',
    type: '普通用户',
    lang: 'I`am shabi'
  }
  // ctx.header = {
  //   'Access-Control-Allow-Origin': '*'
  // }
  ctx.body = usr
})

module.exports = router