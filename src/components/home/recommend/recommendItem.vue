<template>
    <div class="recommendItem col mb-4">
        <div class="card">
            <img src="../../../assets/img/test/test3.webp" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title mb-4">改稿修炼手册！一个能抢钱的Banner到底怎么排？</h5>
                <div>
                    <el-avatar size="small" :src="circleUrl"></el-avatar>
                    <span style="font-weight: 600">William.Jiang</span>
                    <div class="float-right">
                        <el-tag type="success" class="mr-2">编程课</el-tag>
                        <el-tag type="warning">Python</el-tag>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "recommendItem",
        data(){
            return{
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
            }
        }
    }
</script>

<style scoped>

</style>