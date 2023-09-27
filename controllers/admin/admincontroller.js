const AdminModel = require("../../models/Admin")
const ComplaintModel = require('../../models/complaint')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class adminController {
    static dashboard = async (req, res) => {
        try {
            // console.log(req.data1)
            const {name,email,role, image} = req.data1
            res.render('admin/dashboard',{n:name, role:role , img:image})
        } catch (error) {
            console.log(error)
        }
    }

    static login = async (req, res) => {
        try {
            res.render('admin/login')
        } catch (error) {
            console.log(error)
        }
    }

    static ragister = async (req, res) => {
        try {
            res.render('admin/ragister')
        } catch (error) {
            console.log(error)
        }
    }

    static admininsert = async (req, res) => {
        try {
            const { name, email, password } = req.body
            const hashpassword = await bcrypt.hash(password, 10)
            //    console.log(req.body)
            const result = new AdminModel({
                name: name,
                email: email,
                password: hashpassword
            })

            await result.save()
            res.redirect('/admin/login')
        } catch (error) {
            console.log(error)
        }
    }

    static complaintdisplay = async(req,res)=>{
        try {
            const{name,email,role,image} = req.data1
            const cdata = await ComplaintModel.find()
            res.render('admin/displaycomplaint',{n:name,role:role,c:cdata,img:image})
        } catch (error) {
          console.log(error)  
        }
    }
    // static verifylogin = async (req, res) => {
    //     try {
    //         // console.log(req.body)
            
    //         const { email, password } = req.body
    //         if (email && password) {
    //             const admin = await AdminModel.findOne({ email: email })
    //             //    console.log(admin)
    //             //    password checking 
    //             if (admin != null) {
    //                 const ismatched = await bcrypt.compare(password,admin.password)
    //                 if (ismatched) {
    //                     const token = jwt.sign({ID: student._id}, 'sagarporwal9999')
    //                     res.cookie('token',token)
    //                     res.redirect('/admin/dashboard')
    //                 }else{
    //                     res.redirect('/admin/login')
    //                 }
    //             }else{
    //                 res.redirect('/admin/login')
    //             }
    //         } else {
    //             res.redirect('/admin/login')
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
}
module.exports = adminController