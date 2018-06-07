const mongoose=require('../db')
const Schema=mongoose.Schema
const exerciseSchema=new Schema({
    Id:{
        type:String,
        require:true,
        unique:true
    },
   type_name:{
       type:String,
       require:true
   },
   content:{
       type:String,
       require:true
   },
   option:Array,
   sub_exercise_id:Array,
   answer:{
       type:String,
       require:true
   },
   audio:String,
   score:{
       type:String,
       require:true
   }

})
module.exports=mongoose.model('Exercise',exerciseSchema)