
const Message = require('../model/message')

// 数据库操作
const findAllMessage = (loginId) =>{//当前登录用户的用户名
  return new Promise((resolve, reject) => {
    Message.find({
      $or: [{'send_login_name': loginId}, {'recv_login_name': loginId}]
    }, (err, doc) => {
      if(err) {
        console.log('出错')
        reject(err)
      }
      resolve(doc)
    })
  })
} 

const findUnreadMessage = (loginId) => {
  return new Promise((resolve, reject) => {
    Message.find({
      $or: [{'recv_login_name': loginId}, {'visibility': false}]
    }, (err, doc) => {
      if(err) {
        console.log('出错')
        reject(err)
      }
      resolve(doc)
    })
  })
}

const ShowChat = async (ctx) => {
  // 获得当前登录的用户
  console.log(ctx.request.body.login_name)
  let loginId = ctx.request.body.login_name
  // console.log(ctx.request.body)
  let result = await findUnreadMessage(loginId)
  // console.log(result)
  if(result.length === 0) {
    ctx.status = 200
    ctx.body = {
      success: false
    }
  } else {
    ctx.status = 200
    ctx.body = {
      success: true,
      data: result
    }
  }
}

module.exports = {
  ShowChat
}