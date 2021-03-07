<template>
    <div class="addCurriculum">
        <div class="itemCard">
            <div class="container-xl">
                <el-form ref="form" :model="curriculum" label-width="80px">
                    <el-form-item label="课程封面">
                        <curriculum-cover @toCoverBlob="getCoverBlob" ref="curriculumCover"></curriculum-cover>
                    </el-form-item>
                    <el-form-item label="课程名称">
                        <el-input v-model="curriculum.title"></el-input>
                    </el-form-item>
                    <el-form-item label="课程类型">
                        <el-cascader
                                v-model="curType"
                                clearable
                                @change="getTeacher(curType[0])"
                                :props="{ expandTrigger: 'hover' }"
                                :options="options">
                        </el-cascader>
                    </el-form-item>
                    <el-form-item label="课程老师">
                        <el-select v-model="curriculum.teacherId" placeholder="请选择老师类型">
                            <el-option  v-for="item in teachers" :value="item.teacherId" :label="item.teacherName">
                                <img :src="$store.state.targetURL+item.teacherAvatar"
                                     alt=""
                                     style="border-radius: 50%;height: 25px;width: 25px">
                                <span class="ml-2">{{ item.teacherName }}</span>
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="课程介绍">
                        <el-input type="textarea" v-model="curriculum.description"></el-input>
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
    import CurriculumCover from "../components/AddCurriculum/CurriculumCover";
    import {addCur,addCover,getTeacher} from "../requests/api";

    export default {
        name: "AddCurriculum",
        components:{
            CurriculumCover
        },
        data(){
            return {
                curriculum:{
                    title:'',
                    categoryParent:'',
                    categoryChildren:'',
                    description:'',
                    teacherId:''
                },
                coverBlob:null,
                cover:null,
                options: [
                    {
                        value: 10,
                        label: '数学课程',
                        children: [
                            {
                                value: 11,
                                label: '高考数学',
                            },
                            {
                                value: 12,
                                label: '高等数学',

                            },
                            {
                                value: 13,
                                label: '线性代数',
                            },
                            {
                                value: 14,
                                label: '概率论'
                            },
                        ]
                    },
                    {
                        value: 20,
                        label: '英语课程',
                        children: [
                            {
                                label: '高考英语',
                                value: 21
                            },
                            {
                                label: '考研英语',
                                value: 22
                            },
                            {
                                label: '英语四级',
                                value: 23
                            },
                            {
                                label: '英语六级',
                                value: 24
                            },
                        ]
                    },
                    {
                        value: 30,
                        label: '代码编程',
                        children: [
                            {
                                label: 'Java',
                                value: 31
                            },
                            {
                                label: 'C语言',
                                value: 32
                            },
                            {
                                label: 'Python',
                                value: 33
                            },
                            {
                                label: 'HTML前端',
                                value: 34
                            },
                        ]
                    },
                ],
                teachers:[],
                curType:['00','0'],
            }
        },
        watch:{
            curType:function (newData) {
                this.curriculum.categoryParent=newData[0];
                this.curriculum.categoryChildren = newData[1]
            }
        },
        methods:{
            onSubmit(){
                addCur(
                    this.curriculum
                ).then(res => {
                    if (res.resultCode === 1230){
                        this.upCover(res.data.course.courseId);
                        console.log(res);
                    }
                }).catch(err => {
                    this.$message.error('添加课程失败')
                    console.log('课程失败\n'+err)
                })
            },
            getCoverBlob(coverBlob){
                this.coverBlob = coverBlob
                console.log(coverBlob);
            },
            upCover(curId){
                const formData = new FormData()
                formData.append('courseCover', this.coverBlob)
                addCover(
                    curId,
                    formData
                ).then(res => {
                    this.$message({
                        message: '添加课程成功',
                        type: 'success'
                    })
                    Object.assign(this.$data, this.$options.data())  //重置表单
                    this.$refs.curriculumCover.destroy()
                }).catch(err =>{
                    this.$message.error('添加封面失败')
                    console.log('封面失败\n'+ err)
                })
            },
            getTeacher(categoryId){
                if (categoryId ==null) return
                this.teachers=[]
                this.curriculum.teacherId =''
                getTeacher({
                        categoryId:categoryId
                }
                ).then(res => {
                    if (res.resultCode!==1410){
                        this.$message.warning(res.resultCode+" , "+res.message)
                        return;
                    }
                    if (res.data.teachers.length === 0){
                        this.$message.warning('无老师')
                        return;
                    }
                    this.teachers= res.data.teachers;
                    console.log(res);
                }).catch(err => {
                    this.$message.error('获取老师失败')
                    console.log('获取老师失败\n'+ err)
                })
            }
        }
    }
</script>

<style scoped>

</style>
