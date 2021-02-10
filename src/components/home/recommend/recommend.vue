<template>
    <div class="recommend">
        <div class="container pl-0 pr-0">
            <h3 class="recommendTitle">推荐课程</h3>
            <div class="recommendList">
                <div class="row row-cols-1 row-cols-md-3">
                    <div @click="toVideo('10020')">
                        <recommend-item/>
                    </div>
                    <recommend-item/>
                    <recommend-item/>
                    <recommend-item/>
                    <recommend-item/>
                    <recommend-item/>
                </div>
            </div>
            <div class="mt-3 listMore">
                <button type="button" class="btn btn-warning">&nbsp&nbsp查看更多课程 <span> > </span>&nbsp&nbsp</button>
            </div>
        </div>
    </div>
</template>

<script>
    import recommendItem from "./recommendItem";
    export default {
        name: "recommend",
        components:{
            recommendItem
        },
        methods:{
            toVideo(videoId){
                this.$router.push({
                    path:`/video/${videoId}`,
                })
            }
        }
    }
</script>

<style lang="less">
    @import "../../../assets/css/home/recommend/recommend";
</style>
