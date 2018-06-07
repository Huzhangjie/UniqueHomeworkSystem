// const mongoose = require('mongoose');
// 加密密码
const md5 = require('md5')

const User = require('../model/user')

// 改变时间格式
const moment = require('moment');
const objectIdToTimestamp = require('objectid-to-timestamp');

// 数据库操作
const findUser = (username) => {
  // console.log(User.findOne)
  return new Promise((resolve, reject) => {
    User.findOne({ 'login_name':username }, (err, doc) => {
      if (err) {
        console.log('出错')
        reject(err)
      }
      resolve(doc)
    })
  })
}

const updateInfo = (login_name, data) => {
  return new Promise( (resolve, reject) => {
    User.update({'login_name': login_name}, {$set: data}, (err, doc) => {
      if(err) {
        console.log('出错')
        reject(err)
      }
      resolve(doc)
    })
  })
}

const updatePass = (login_name, pass) => {
  return new Promise((resolve, reject) => {
    User.update({'login_name': login_name}, {$set: {'password': pass}}, (err, doc) => {
      if(err) {
        console.log('出错')
        reject(err)
      }
      resolve(doc)
    })
  })
}

// const updateAvatar = () => {
//   // console.log(login_name, avatar)
//   return new Promise((resolve, reject) => {
//     console.log(55)
//     User.update({'login_name': 'Huzj'}, {$set: {'avatar': 'avat123213ar'}}, (err, doc) => {
//       console.log(66)
//       if(err) {
//         console.log('出错')
//         reject(err)
//       }
//       resolve(doc)
//     })
//   })
// }

const updateAvatar = (login_name, pass) => {
  return new Promise((resolve, reject) => {
    User.update({'login_name': login_name}, {$set: {'avatar': pass}}, (err, doc) => {
      if(err) {
        console.log('出错')
        reject(err)
      }
      resolve(doc)
    })
  })
}

const Login = async (ctx) => {
    //拿到账号和密码
    // console.log(ctx.request.body.pass)
    let username = ctx.request.body.name
    let password = md5(ctx.request.body.pass)
    // console.log(password)
    let doc = await findUser(username)
    // console.log(doc)
    if(!doc) {
      // console.log('检查到用户登录名不存在')
      ctx.status = 200
      ctx.body = {
        success: false
      }
    } else if(doc.password === password) {
      delete doc.password
      doc.password = ''
      ctx.status = 200
      ctx.body = {
        success: true,
        user: doc
      }
    } else {
      console.log('密码错误！')
      ctx.status = 200;
      ctx.body = {
        success: false
      }
    }
}

const Reg = async(ctx) => {
  console.log(ctx.request.body)
  ctx.status = 200
  ctx.body = {
    info: 'success'
  }
  let user = new User({
    role: ctx.request.body.role == 0 ? "student" : "teacher",    
    login_name: ctx.request.body.login_name,
    password: md5(ctx.request.body.pass),
    name: ctx.request.body.name,
    avatar: '/static/avatar.png'
  })

  let doc = await findUser(user.login_name)
  if(doc) {
    // console.log('用户已存在')
    ctx.status = 200,
    ctx.body = {
      success: false
    }
  } else {
    user.create_time = moment(user.create_time).format('YYYY-MM-DD HH:mm:ss')
    await new Promise((resolve, reject) => {
      user.save((err) => {
        if(err) {
          reject(err)
        }
        resolve()
      })
    })
    console.log('注册成功')
    ctx.status = 200
    ctx.body = {
      success: true
    }
  }
}

const UpdateInfo = async(ctx) => {
  let login_name = ctx.request.body.login_name
  console.log(ctx.request.body)
  let doc = await updateInfo(login_name, ctx.request.body)
  console.log(doc)
  if(doc) {
    ctx.status = 200
    ctx.body = {
      success: true
    }
  } else {
    ctx.status = 200
    ctx.body = {
      success: false
    }
  }
}

const CheckPass = async(ctx) => {
  console.log(md5('123456'))
  console.log(md5('1234'))
  let login_name = ctx.request.body.login_name
  console.log(ctx.request.body)  
  let oldPass = md5(ctx.request.body.pass)
  let newPass = md5(ctx.request.body.newPass)
  let doc = await findUser(login_name)
  if(doc.password !== oldPass) {
    ctx.status = 200
    ctx.body = {
      success: false,
      message: '密码错误'
    }
  } else {
    let doc = await updatePass(login_name, newPass)
    console.log(doc)
    if(doc) {
      ctx.status = 200
      ctx.body = {
        success: true,
        message: '成功'
      }
    }else {
      ctx.status = 200
      ctx.body = {
        success: false,
        message: '失败'
      }
    }
  }
}

const UpdateAvatar = async(ctx) => {
  // console.log(ctx.request.body)
  let login_name = ctx.req.body.login_name
  let avatar = '/static/' + ctx.req.file.filename
  // console.log(login_name)
  // console.log(avatar)
  let doc = await updateAvatar(login_name, avatar)
  console.log(doc)
  if(doc) {
    ctx.status = 200
    ctx.body = {  
      success: true,
      filename: avatar//返回文件名  
    }  
  }else {
    ctx.status = 200
    ctx.body = {
      success: false
    }
  }
}

const GetAvatar = async(ctx) => {
  let login_name = ctx.request.body.login_name
  // console.log(login_name)
  let doc = await findUser(login_name)
  if(doc) {
    let avatar = doc.avatar
    ctx.status = 200
    ctx.body = {
      success: true,
      avatar
    }
  } else {
    ctx.status = 200
    ctx.body = {
      success: false,
      avatar
    }
  }
}

module.exports = {
  Login,
  Reg,
  UpdateInfo,
  CheckPass,
  UpdateAvatar,
  GetAvatar
}