const CourseModel = require('../../models/Course')

class CourseController {
        
    static addcourse = async(req,res)=>{
        try {
            const {name, email, image, role} = req.data1
            const odata = await CourseModel.find()
            res.render('admin/course/addcourse',{n:name, o:odata, role:role, img:image})
        } catch (error) {
            console.log(error)
        }
    }

    static courseinsert = async(req,res) => {
        try {
            const {cname} = req.body
            const result = await CourseModel({
                cname:cname,
            })
             await result.save()
            res.redirect('/addcourse')
        } catch (error) {
            console.log(error)
        }
    }

    static courseview = async(req,res) => {
        try {
            const {name, email, image, role} = req.data1
            const odata = await CourseModel.findById(req.params.id)
            // console.log(odata)
             res.render('admin/course/view',{n:name, o:odata, role:role})
        } catch (error) {
            console.log(error)
        }
    }
    static courseedit = async(req,res) => {
        try {
            const {name, email, image, role} = req.data1
            const odata = await CourseModel.findById(req.params.id)
            // console.log(odata)
             res.render('admin/course/view',{n:name, o:odata, role:role})
        } catch (error) {
            console.log(error)
        }
    }

    static coursedelete = async(req,res) => {
        try {
            const {name, email, image, role} = req.data1
            const odata = await CourseModel.findByIdAndDelete(req.params.id)
            // console.log(odata)
            res.redirect('/addcourse')
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = CourseController