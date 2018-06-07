const mongoose=require('../db')
const Schema=mongoose.Schema
const classSchema=new Schema({
    Id:{
        type:String,
        require:true,
        unique:true
    },
    class_name:{
        type:String,
        require:true
    },
    stu_id_array:{
       type:Array
    },
    teacher_id:{
        type:String
    },
    school:String
})
module.exports=mongoose.model('Class',classSchema)