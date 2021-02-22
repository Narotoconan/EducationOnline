<template>
    <div class="addTeacher">
        <div class="itemCard">
            <div class="container-xl">
                <el-form ref="form" :model="teacher" label-width="80px">
                    <el-form-item label="老师头像">
                        <teacher-avatar @toAvatarBlob="getAvatarBlob"
                                        ref="teacherAvatar"></teacher-avatar>
                    </el-form-item>
                    <el-form-item label="老师姓名">
                        <el-input v-model="teacher.name"></el-input>
                    </el-form-item>
                    <el-form-item label="老师类型">
                        <el-select v-model="teacher.category" placeholder="请选择老师类型">
                            <el-option label="数学老师" value="10"></el-option>
                            <el-option label="英语老师" value="20"></el-option>
                            <el-option label="编程老师" value="30"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="老师介绍">
                        <el-input type="textarea" v-model="teacher.info"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="warning" @click="onSubmit">立即创建</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    import TeacherAvatar from "../components/AddTeacher/TeacherAvatar";
    import {addTeacher, addAvatar} from "../requests/api";

    export default {
        name: "AddTeacher",
        components: {
            TeacherAvatar
        },
        data() {
            return {
                teacher: {
                    name: '',
                    category: null,
                    info: ''
                },
                avatarBlob: null
            }
        },
        methods: {
            onSubmit() {
                addTeacher(
                    this.teacher
                ).then(res => {
                    if (res.resultCode === 1400) {
                        this.upAvatar(res.data.teacherId)
                    }
                    console.log(res)
                }).catch(err => {
                    this.$message.error('添加失败')
                    console.log(err);
                })

            },
            upAvatar(teacherId){
                const formData = new FormData()
                formData.append('teacherAvatar', this.avatarBlob)
                addAvatar(
                    teacherId,
                    formData
                ).then(res => {
                        this.$message({
                            message: '添加老师成功',
                            type: 'success'
                        })
                        Object.assign(this.$data, this.$options.data())  //重置表单
                        this.$refs.teacherAvatar.destroy()
                    }
                ).catch(err => {
                        console.log(err)
                    }
                )
            },
            getAvatarBlob(avatarBlob) {
                this.avatarBlob = avatarBlob
                console.log(this.avatarBlob)
            }
        }
    }
</script>

<style lang="less">
    .addTeacher {
        cursor: default;
    }
</style>
