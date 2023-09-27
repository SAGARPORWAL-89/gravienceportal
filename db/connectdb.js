const mongoose = require('mongoose')
const db_liveurl = 'mongodb+srv://sagarporwal8370:sagar123@cluster0.o3zxkoz.mongodb.net/gravienceportal?retryWrites=true&w=majority'
const local_url = 'mongodb://127.0.0.1:27017/gravienceportal'
const connectdb = ()=>{
     return mongoose.connect(db_liveurl)
     .then(()=>{
        console.log('connetion successfully')
     }).catch((error)=>{
        console.log(error)
     })
}
module.exports = connectdb