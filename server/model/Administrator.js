const mongoose=require('../db')
const Schema=mongoose.Schema
const adiministratorSchema=new Schema({
    Id:{
        type:String,
        require:true,
        unique:true
    },
    login_name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    picture:String,
    tel:String,
    email:String
})
module.exports=mongoose.model('Adiministrator',adiministratorSchema)