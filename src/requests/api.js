import {get, post, avatarPost} from './http'

export const addTeacher = teacherMg => post('teacher/', teacherMg)

export const addAvatar = (teacherId, teacherAvatar) => avatarPost('teacher/avatar/upload/' + teacherId, teacherAvatar)

export const addCur = curMg => post('course/add/', curMg)

export const addCover = (curId, curCover) => avatarPost('course/cover/upload/' + curId, curCover)

export const getTeacher = categoryId => get('teacher/', categoryId)

export const getCurriculum = message => get('course/query/', message)

export const getCurriculumDetails = curriculumId => get('course/query/', curriculumId)

export const getVideoList = curriculumId =>get('video/query/',curriculumId)

export const addVideo = videoMg => post('video/add/',videoMg)
