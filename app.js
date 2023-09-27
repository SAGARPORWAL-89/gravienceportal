const express = require('express');
// console.log(express)
const app = express()
const port = 3000; 
const web = require('./routes/web')
const connectdb = require('./db/connectdb')
const fileUpload = require("express-fileupload");  //for file upload

// for file upload
app.use(fileUpload({useTempFiles: true}));

// cookies
const cookieparser = require('cookie-parser')

// for msg show 
let session = require('express-session')
let flash = require('connect-flash');

app.use(cookieparser())

// for msg show use 
app.use(session({
    secret: 'secret',
    cookie: {maxAge:60000},
    resave: false,
    saveUninitialized: false,
}));

app.use(flash());

//view engine ejs
app.set('view engine','ejs')  // first check

//for image and css
app.use(express.static('public'))   // 2nd check

//for data get
app.use(express.urlencoded({extended:true}))     

//db connection
connectdb()

//route load
app.use('/',web)


app.listen(port, () => {
    console.log(`server is running localhost: ${port}`)
})