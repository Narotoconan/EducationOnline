import {get, post, avatarPost} from './http'

export const addTeacher = teacherMg => post('teacher/', teacherMg)

export const addAvatar = (teacherId, teacherAvatar) => avatarPost('teacher/avatar/upload/' + teacherId, teacherAvatar)

export const addCur = curMg => post('course/', curMg)

export const addCover = (curId, curCover) => avatarPost('course/avatar/upload/' + curId, curCover)

export const getTeacher = categoryId => get('teacher/', categoryId)

export const getCurriculum = message => get('course/', message)
