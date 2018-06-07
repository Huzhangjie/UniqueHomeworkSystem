const multer = require('koa-multer')
const Router = require('koa-router')
const uploadRouter = new Router()

const UserController = require('../controller/user.js')

let storage = multer.diskStorage({  
  //文件保存路径  
  destination: function (req, file, cb) { 
    cb(null, 'server/dist/static/')
  },  
  //修改文件名称  
  filename: function (req, file, cb) {  
    var fileFormat = (file.originalname).split(".")
    cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1])
  }  
}) 

//加载配置  
let upload = multer({ storage: storage })  

// router.post('/api/upload', upload.single('file'), async (ctx, next) => {
//   ctx.body = {  
//     filename: ctx.req.file.filename//返回文件名  
//   }  
//   console.log(ctx.req)
// })
uploadRouter.post('/upload',upload.single('file'), UserController.UpdateAvatar)

module.exports = uploadRouter
