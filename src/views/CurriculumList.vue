<template>
    <div class="addVideo">
        <div class="itemCard">
            <el-table
                    :data="tableData"
                    border
                    highlight-current-row
                    stripe
                    id="xxx"
                    style="width: 100%;">
                <el-table-column
                        fixed
                        prop="courseId"
                        align="center"
                        label="课程ID"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="cover"
                        label="课程封面"
                        align="center"
                        width="170">
                    <template slot-scope="scope">
                        <img :src="$store.state.targetURL+scope.row.img" alt=""
                             style="width: 100%;border-radius: 10px;">
                    </template>
                </el-table-column>
                <el-table-column
                        prop="title"
                        label="课程名称"
                        show-overflow-tooltip
                        align="center"
                        width="550">
                </el-table-column>
                <el-table-column
                        prop="categoryParent"
                        align="center"
                        label="课程分类">
                    <template slot-scope="scope">
                        <el-tag type="success">{{ scope.row.categoryParent }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="categoryChildren"
                        align="center"
                        label="课程类型">
                    <template slot-scope="scope">
                        <el-tag type="warning">{{ scope.row.categoryChildren }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="teacherName"
                        align="center"
                        label="课程老师">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        align="center"
                        width="200">
                    <template slot-scope="scope">
                        <el-button @click="changeCur(scope.row)" type="info" size="small" round plain>修改视频</el-button>
                        <el-button @click="addVideo(scope.row)" type="primary" size="small" round plain>添加视频</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="mt-5" style="text-align: center">
                <el-pagination
                        background
                        layout="prev, pager, next"
                        @current-change="toGetCur"
                        :page-size="size"
                        :total="total">
                </el-pagination>
                <el-button type="success" round size="mini" style="margin-top: 1rem" @click="toGetCur(page)">刷新列表</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import {getCurriculum,getTeacher} from "../requests/api";
    import { Loading } from 'element-ui';

    export default {
        name: "CurriculumList",
        data() {
            return {
                tableData: [],
                total: 1,
                size: 7,
                page:null
            }
        },
        mounted() {
            this.toGetCur(1)
        },
        methods: {
            addVideo(row) {
                this.$router.push({
                    path:'/addVideo',
                    query:{
                        courseId: parseInt(row.courseId)
                    }
                })
            },
            changeCur(row) {
                this.$router.push({
                    path:'/changeCurriculum',
                    query:{
                        courseId: parseInt(row.courseId),
                    }
                })
            },
            toGetCur(val) {
                this.page=val;
                let loadingInstance=Loading.service({
                    target:document.querySelector('.el-table__body-wrapper')
                })
                getCurriculum({
                    c: val,
                    s: this.size,
                    asc:false
                }).then(res => {
                    loadingInstance.close();// 以服务的方式调用的 Loading 需要异步关闭
                    if (res.resultCode !== 1210) {
                        this.$message.warning(res.resultCode+'-'+res.message)
                        return
                    }
                    if (!res.data.total) {
                        this.$message.warning(res.message+'_无数据')
                        return
                    }
                    this.tableData = res.data.courses;
                    this.total = res.data.total
                    console.log(res);
                }).catch(err => {
                    this.$message.error('请求失败')
                    console.log(err)
                })
            },
        }
    }
</script>

<style>

</style>
