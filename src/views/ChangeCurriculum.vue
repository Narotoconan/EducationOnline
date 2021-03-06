<template>
    <div class="changeCurriculum">
        <div class="itemCard">
            <div class="container-xl">
                <el-form label-position="right" :rules="rules" ref="ruleForm" status-icon label-width="80px" :model="curriculumMessage">
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
    import {getCurriculumDetails} from "../requests/api";

    export default {
        name: "ChangeCurriculum",
        data(){
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
              curriculumMessage:{
                  title:'',
                  description:''
              },
              rules:{
                  title: [
                      { validator:checkTitle , trigger: 'blur' }
                  ],
                  description: [
                      { validator:checkDescription, trigger: 'blur' }
                  ]
              }
          }
        },
        created() {
            let courseId =this.$route.query.courseId
            getCurriculumDetails({
                cid:courseId
            }).then(res => {
                if (res.resultCode !== 1210) {
                    this.$message.warning(res.resultCode+'-'+res.message)
                    return
                }
                this.curriculumMessage = res.data.courseDetails[0];
            }).catch(err => {
                this.$message.error('请求失败')
                console.log(err);
            })
        },
        methods:{
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (!valid) {
                        this.$message.error('填写格式有误')
                        return false
                    }
                    this.$message.success('asd')
                });
            },
        }
    }
</script>

<style lang="less">
.el-textarea__inner{
    height: 8rem;
}
</style>
