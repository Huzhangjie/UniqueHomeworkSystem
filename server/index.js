// 使用koa 框架 启动后端服务器
const Koa = require('koa')
const app = new Koa()
const router = require('./route')
// const multer = require('koa-multer')
const staticServer = require('koa-static')

// 后端路由 获取对应api
// const Router = require('koa-router')
// const router = new Router()

const bodyParser = require('koa-bodyparser')
app.use(bodyParser())

// var storage = multer.diskStorage({  
//   //文件保存路径  
//   destination: function (req, file, cb) { 
//     cb(null, 'static/')
//   },  
//   //修改文件名称  
//   filename: function (req, file, cb) {  
//     var fileFormat = (file.originalname).split(".")
//     cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1])
//   }  
// })  
//加载配置  
// var upload = multer({ storage: storage })  
//路由  

// const router1 = new Router()
// router1.post('/api/upload', upload.single('file'), async (ctx, next) => {
//   ctx.body = {  
//     filename: ctx.req.file.filename//返回文件名  
//   }  
//   console.log(ctx.req)
// })

// app.use(router1.routes()).use(router1.allowedMethods())

app.use(router.routes()).use(router.allowedMethods())
app.use(staticServer(__dirname + '/dist'))

app.listen(3000, ()=> {
  console.log('The Server is running at http://127.0.0.1:3000')
})