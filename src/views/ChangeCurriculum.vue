<template>
    <div class="changeCurriculum">
        <div class="itemCard">
            <div class="container-xl">
                <div class="pb-4">
                    <el-page-header content="课程信息修改" @back="$router.back()"></el-page-header>
                </div>
                <el-form label-position="right" :rules="rules" ref="ruleForm" status-icon label-width="80px"
                         :model="curriculumMessage">
                    <el-form-item label="课程封面">
                        <img :src="$store.state.targetURL+curriculumMessage.img" alt=""
                             style="height: 120px;border-radius: 15px">
                    </el-form-item>
                    <el-form-item label="课程ID">
                        <el-input :value="curriculumMessage.courseId" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="课程名称" prop="title">
                        <el-input v-model="curriculumMessage.title"></el-input>
                    </el-form-item>
                    <el-form-item label="课程介绍" prop="description">
                        <el-input type="textarea" v-model="curriculumMessage.description"></el-input>
                    </el-form-item>
                </el-form>
                <div style="text-align: center">
                    <el-button @click="submitForm('ruleForm')" type="success" round dark>确认修改</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getCurriculumDetails, changeCurriculum} from "../requests/api";

    export default {
        name: "ChangeCurriculum",
        data() {
            const checkTitle = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('名称不能为空'));
                }
                callback();
            }
            const checkDescription = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('课程内容不能为空'));
                }
                callback();
            }
            return {
                curriculumMessage: {},
                originMessage: {
                    title:'',
                    description:''
                },
                toUploadMessage: {
                    courseId:this.$route.query.courseId
                },
                rules: {
                    title: [
                        {validator: checkTitle, trigger: 'blur'}
                    ],
                    description: [
                        {validator: checkDescription, trigger: 'blur'}
                    ]
                }
            }
        },
        created() {
            this.toGetMg()
        },
        watch: {
            'curriculumMessage.description': {
                handler: function (val){
                    if (val !== this.originMessage.description) {
                        this.toUploadMessage.description = val
                    } else {
                        this.$delete(this.toUploadMessage, 'description')
                    }
                }
            },
            'curriculumMessage.title': {
                handler: function(val) {
                    if (val !== this.originMessage.title) {
                        this.toUploadMessage.title = val
                    } else {
                        this.$delete(this.toUploadMessage, 'title')
                    }
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (!valid) {
                        this.$message.error('填写格式有误')
                        return false
                    }
                    this.toChange()
                });
            },
            toGetMg() {
                let courseId = this.$route.query.courseId
                getCurriculumDetails({
                    cid: courseId
                }).then(res => {
                    if (res.resultCode !== 1210) {
                        this.$message.warning(res.resultCode + '-' + res.message)
                        return
                    }
                    this.curriculumMessage = res.data.courses[0];
                    this.originMessage.title = res.data.courses[0].title;
                    this.originMessage.description = res.data.courses[0].description;
                }).catch(err => {
                    this.$message.error('请求失败')
                    console.log(err);
                })
            },
            toChange() {
                let list = this.toUploadMessage
                changeCurriculum(
                    list
                ).then(res => {
                    if (res.resultCode !== 1250) {
                        this.$message.warning(res.resultCode + ' ' + res.message)
                        return
                    }
                    this.$message.success('修改成功')
                    this.toGetMg()
                }).catch(err => {
                    this.$message.error('修改失败')
                    console.log(err);
                })
            }
        }
    }
</script>

<style lang="less">
    .el-textarea__inner {
        height: 8rem;
    }
</style>
