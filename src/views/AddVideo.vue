<template>
    <div class="addVideo">
        <div class="itemCard">
            <el-table
                        :data="tableData"
                        border
                        style="width: 100%">
                    <el-table-column
                            fixed
                            prop="curID"
                            label="课程ID"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="curName"
                            label="课程名称"
                            width="600">
                    </el-table-column>
                    <el-table-column
                            prop="categoryParent"
                            label="课程分类">
                    </el-table-column>
                    <el-table-column
                            prop="categoryChildren"
                            label="课程类型">
                    </el-table-column>
                    <el-table-column
                            prop="teacherName"
                            label="课程老师">
                    </el-table-column>
                    <el-table-column
                            fixed="right"
                            label="操作"
                            width="200">
                        <template slot-scope="scope">
                            <el-button @click="addVideo(scope.row)" type="danger" size="middle" round>添加视频</el-button>
                        </template>
                    </el-table-column>
                </el-table>
        </div>
    </div>
</template>

<script>
    import {getCurriculum} from "../requests/api";

    export default {
        name: "AddVideo",
        data(){
            return {
                tableData:[
                    {
                        curID:10012,
                        curName:'大叔大叔的我打我打的',
                        categoryParent:'代码编程',
                        categoryChildren:'Python',
                        teacherName:'吴彦祖'

                    }
                ]
            }
        },
        methods:{
            addVideo(row){

            },
            toGetCur(){
                getCurriculum({
                    
                }).then(res => {

                }).catch(err => {

                })
            }
        }
    }
</script>

<style scoped>

</style>
