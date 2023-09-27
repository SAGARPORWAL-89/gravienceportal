class TeacherController{
    static displayTeacher = async (req,res) => {
          try {
            res.send('Display teacher')
          } catch (error) {
            console.log(error)
          }
    }
}

module.exports = TeacherController