const Router = require('koa-router')
const router = new Router()

const UserController = require('../controller/user.js')
const MessageController = require('../controller/message.js')

const loginRouter = new Router()
loginRouter.post('/login', UserController.Login)

const registerRouter = new Router()
registerRouter.post('/register', UserController.Reg)

const updateInfoRouter = new Router()
registerRouter.post('/updateInfo', UserController.UpdateInfo)

const checkPassRouter = new Router()
checkPassRouter.post('/checkPass', UserController.CheckPass)

const getAvatarRouter = new Router()
getAvatarRouter.post('/getAvatar', UserController.GetAvatar)

const messageRouter = new Router()
messageRouter.post('/getMessage', MessageController.ShowChat)

const uploadRouter = require('./upload')
// 路由整合
router.use('/api',loginRouter.routes(),loginRouter.allowedMethods())
router.use('/api',registerRouter.routes(),registerRouter.allowedMethods())
router.use('/api',updateInfoRouter.routes(),updateInfoRouter.allowedMethods())
router.use('/api',checkPassRouter.routes(),checkPassRouter.allowedMethods())
router.use('/api',messageRouter.routes(),messageRouter.allowedMethods())
router.use('/api',getAvatarRouter.routes(),getAvatarRouter.allowedMethods())
router.use('/api',uploadRouter.routes(),uploadRouter.allowedMethods())

module.exports = router