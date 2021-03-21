const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema (
    {
    userName:{
        type: String,
        required: true
    },
    birthdayDate:{
        type: Date
    },
    email:{
        type: String
    },
    phone: {
        type: String
    },
    passport: {
        type: String
    },
    datepassport: {
        type: Date
    },
    issued: {
        type: String
    },
    code: {
        type: String
    },
    license: {
        type: String
    },
    licenseDate: {
        type: Date
    },
    password: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
},
{
    image: {
        type: String
    },
    },{
        collection: 'image'
    }
)




module.exports =  mongoose.model('mytable', signUpTemplate );