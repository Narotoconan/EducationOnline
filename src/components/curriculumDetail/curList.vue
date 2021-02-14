<template>
    <div class="curList">
        <div class="title">
            <i class="bi bi-view-list"></i>
            <span>课程目录</span>
        </div>
        <ul class="theList mt-3">
            <li v-for="(item,index) in 5" @click="$router.push('/video/1212')">
                <div>
                    <i class="bi bi-play-circle"></i>
                    <span class="ml-4 mr-4"> Lesson {{index+1}} </span>
                    <span style="font-size: 1.05rem">AI基础！NO.6 混合工具的基础与应用</span>
                    <div class="watch">
                        <el-button type="warning" size="small" plain round>观看课程</el-button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: "curList",
        data(){
            return{

            }
        },
        mounted() {
            this.listShow()
        },
        methods:{
            listShow(){
                $(".theList li").on("mouseenter",function () {
                    $(this).find(".watch").css({"opacity":1})
                }).on("mouseleave",function () {
                    $(this).find(".watch").css({"opacity":0})
                })
            }
        }
    }
</script>

<style scoped>

</style>
