<template>
    <div class="addVideo">
        <div class="itemCard">
            <div class="container-xl">
                <div class="card mb-3" style="width: 100%">
                    <div class="row no-gutters" style="height: 10rem">
                        <div class="col-md-3 mr-3 h-100">
                            <img :src="$store.state.targetURL+curriculum.cover" alt="...">
                        </div>
                        <div class="col-md-7 h-100 ">
                            <div class="card-body ml-4">
                                <h5 class="card-title">{{ curriculum.title }}</h5>
                                <div class="card-text mb-2">{{ '课程ID：'+curriculum.courseId }} </div>
                                <div class="card-text mb-2">{{ '上传时间：'+curriculum.date +'&nbsp&nbsp'+ curriculum.time }} </div>
                                <p class="card-text">
                                    <el-tag type="success">{{ curriculum.categoryParent }}</el-tag>
                                    <el-tag type="warning" style="margin-left: 1rem">{{ curriculum.categoryChildren }}</el-tag>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-5">
                    <el-button type="warning" round
                               @click="dialogVideoVisible = true"
                               style="display: block;margin: 0 auto;">
                        <i class="el-icon-upload el-icon--right mr-1"></i>
                        <span>添加视频</span>
                    </el-button>

                    <el-dialog title="视频信息" :visible.sync="dialogVideoVisible" width="30%" style="text-align: center">
                        <el-form :model="videoMg" style="width: 90%">
                            <el-form-item label="视频标题" :label-width="formLabelWidth">
                                <el-input v-model="videoMg.title" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="BV号" :label-width="formLabelWidth">
                                <el-input v-model="videoMg.bv" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="课程内容" :label-width="formLabelWidth">
                                <el-input type="textarea" v-model="videoMg.content"></el-input>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogVideoVisible = false">取 消</el-button>
                            <el-button type="primary" @click="putVideoMg">确 定</el-button>
                        </div>
                    </el-dialog>
                </div>
                <div class="mt-5">
                    <el-table
                            :data="curVideoList"
                            stripe
                            style="width: 100%">
                        <el-table-column
                                prop="lesson"
                                align="center"
                                label="课时顺序">
                            <template slot-scope="scope">
                                {{ 'Lesson'+scope.row.lesson }}
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="title"
                                align="center"
                                show-overflow-tooltip
                                label="视频名称">
                        </el-table-column>
                        <el-table-column
                                prop="bv"
                                align="center"
                                label="B站视频">
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getCurriculumDetails,addVideo,getVideoList} from "../requests/api";
    import { Loading } from 'element-ui';
    export default {
        name: "AddVideo",
        data(){
            return{
                curriculum:{

                },
                videoMg:{
                    courseId:this.$route.query.courseId,
                    title:'',
                    bv:'',
                    content:''
                },
                curVideoList:[],
                dialogVideoVisible:false,
                formLabelWidth:'120px'
            }
        },
        created() {
            this.getCurMg()
        },
        methods:{
            getCurMg(){
                let courseId =this.$route.query.courseId
                getCurriculumDetails({
                    cid:courseId
                }).then(res => {
                    if (res.resultCode !== 1210) {
                        this.$message.warning(res.resultCode+'---'+res.message)
                        return
                    }
                    this.curriculum = res.data.courseDetails[0]
                    this.videoMg.courseId = res.data.courseDetails[0].courseId
                    this.getVideoList()
                }).catch(err => {
                    this.$message.error('课程信息请求失败')
                    console.log(err)
                })
            },
            getVideoList(){
                let loadingInstance=Loading.service({
                    target:document.querySelector('.el-table__body-wrapper')
                })
                getVideoList({
                    courseId:this.videoMg.courseId,
                    asc:false
                }).then(res => {
                    loadingInstance.close()
                    if (res.resultCode !== 1510) {
                        this.$message.warning(res.resultCode+'-'+res.message)
                        return
                    }
                    if (!res.data.total) {
                        this.$message.warning('无视频')
                        return
                    }
                    this.curVideoList=res.data.videos
                }).catch(err => {
                    this.$message.error('视频列表请求失败')
                    console.log(err)
                })
            },
            putVideoMg(){
                this.dialogVideoVisible = false
                addVideo(
                    this.videoMg
                ).then(res => {
                    if (res.resultCode !== 1500) {
                        this.$message.warning(res.resultCode+'---'+res.message)
                        return
                    }
                    this.videoMg={
                        courseId:this.$route.query.courseId,
                        title:'',
                        bv:'',
                        content:''
                    }
                    this.$message.success('添加视频成功')
                    this.getVideoList()
                }).catch(err => {
                    this.$message.error('添加视频失败')
                    console.log(err)
                })
            }
        }
    }
</script>

<style lang="less">
    .addVideo{
        .card{
            border-radius: 15px;
            background-color: #FAFAFA;
            box-shadow: 0 15px 30px rgba(48, 48, 48, 0.1);
            border: 1px solid #efefef;
            padding: 1.5rem;
            img{
                height: 100%;
                border-radius: 15px;
                border: 1px solid #e6e6e6;
                box-shadow: 0 15px 30px rgba(207, 207, 207, 0.1);
            }
        }
        .el-dialog__body{
            text-align: center;
            form{
                display: inline-block;
            }
        }

    }
</style>
