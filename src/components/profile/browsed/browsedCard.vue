<template>
    <div class="browsedCard">
        <div class="browsedTimeLine">
            <div class="browsedPoint"></div>
            <div class="timeLine"></div>
            <div class="dateTime">
                2012-05-15
            </div>
        </div>
        <div class="browsedContent">
            <div class="content">
                <img src="../../../assets/img/test/test2.webp" alt="">
                <div class="partTwo">
                    <div class="title">
                        一个能抢钱的Banner到底怎么排？
                    </div>
                    <div class="time">
                        <i class="bi bi-stopwatch-fill"></i>
                        <span>观看时间：16:50</span>
                    </div>
                    <div class="cardFooter">
                        <el-avatar size="small" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
                        <span class="ml-2">William.will</span>
                        <div class="d-inline-block ml-5">
                            <el-tag type="success" size="small">编程课</el-tag>
                            <el-tag type="warning" size="small" style="margin-left: 5px">Python</el-tag>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "browsedCard",
        props:{
            count:Number
        }
    }
</script>

<style scoped>

</style>