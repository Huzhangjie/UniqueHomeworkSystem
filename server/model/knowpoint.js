// 知识点数据库设计
const mongoose = require('..')
const Schema = mongoose.Schema

const pointSchema = new Schema({

  // 知识点编号
  id:  {
    type: String,
    unique: true,
    require: true,
    index: true
  },

  // 知识点名称
  point_name: {
    type: String,
    require: true
  },

  // 前置知识点列表
  pre_point: Array,

  // 后置知识点列表
  post_point: Array,

  // 知识点的掌握等级
  mastered_degree: String,
})

module.exports = mongoose.model('Point', pointSchema, 'knowpoint')
