const express = require('express');
const FrontController = require('../controllers/FrontController');
const TeacherController = require('../controllers/TeacherController');
const adminController = require('../controllers/admin/admincontroller');
const StudentController = require('../controllers/admin/Studentcontroller');
const route = express.Router();
const checkauth = require('../middleware/auth');
const ComplaintController = require('../controllers/ComplaintController');
const CourseController = require('../controllers/admin/CourseController');

// routing 
route.get('/',FrontController.home)
route.get('/about',FrontController.about)
route.get('/contact',FrontController.contact)
route.get('/help',FrontController.help)
route.get('/benefits',FrontController.benefits)



// Teacher controller
route.get('/teacher/display',TeacherController.displayTeacher)


//admin controller 
route.get('/dashboard',checkauth,adminController.dashboard)
route.get('/admin/login',adminController.login)
route.get('/admin/ragister',adminController.ragister)
route.post('/admininsert',adminController.admininsert)
route.get('/displaycomplaint',checkauth,adminController.complaintdisplay)
// route.post('/admin/verifylogin',checkauth,adminController.verifylogin)


//student controller 
route.get('/admin/addstudent',checkauth,StudentController.addstudent)
route.post('/studentinsert',checkauth,StudentController.studentinsert)
route.get('/admin/studentview/:id',checkauth,StudentController.viewstudent)
route.get('/admin/studentedit/:id',checkauth,StudentController.editstudent)
route.post('/admin/studentupdate/:id',checkauth,StudentController.updatestudent)
route.get('/admin/studentdelete/:id',checkauth,StudentController.studentdelete)
route.post('/verifylogin',StudentController.verifylogin)
route.get('/logout',StudentController.logout)
route.get('/changepassword',checkauth,StudentController.changepassword)
route.get('/profile',checkauth,StudentController.profile)
route.post('/updateprofile',checkauth,StudentController.updateprofile)
route.post('/updatepassword',checkauth,StudentController.updatepassword)


// Complaint controller 
route.get('/addcomplaint',checkauth,ComplaintController.addcomplaint)
route.post('/complaintinsert',checkauth,ComplaintController.complaintinsert)
route.get('/complaint/complaintview/:id',checkauth,ComplaintController.complaintview)
route.get('/complaint/complaintedit/:id',checkauth,ComplaintController.complaintedit)
route.get('/complaint/complaintdelete/:id',checkauth,ComplaintController.complaintdelete)
route.post('/updatestatus/:id',checkauth,ComplaintController.updatestatus)

// Course Controller
route.get('/addcourse',checkauth,CourseController.addcourse)
route.post('/courseinsert',checkauth,CourseController.courseinsert)
route.get('/course/courseview/:id',checkauth,CourseController.courseview)
route.get('/course/courseedit/:id',checkauth,CourseController.courseedit)
route.get('/course/coursedelete/:id',checkauth,CourseController.coursedelete)

module.exports = route;