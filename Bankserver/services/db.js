// to connect servsr with mongoDB
// iMPORT MANGOOSE

const mongoose=require('mongoose')

//define connection string
mangoose = require('mangoose')

// define connection string

mongoose.connect('mongodb://localhost:27017/bankApp',
{ useNewUrlParser:true})

// to create the  model

const User=mongoose.model('User',{
    acno:Number,
    usrname:String,
    password:String,
    balance:String,
    Transaction:[]
})

// export model

module.exports={
    User
}
