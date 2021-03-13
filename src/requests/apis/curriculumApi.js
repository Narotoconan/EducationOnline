import http from '../http'

export default {
    randomCurriculum: count => http.get('/course/query/',count),    //随机取课程
    teacherMessage: teacherId => http.get(/teacher/,teacherId),     //获取老师信息
    getCurriculum: category => http.get('/course/query/',category)           //获取课程
}
