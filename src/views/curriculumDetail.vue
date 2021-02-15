<template>
    <div class="curriculumDetail pb-5">
        <div style="height: 100px"></div>
        <div class="container pr-0 pl-0">
            <curriculum-card></curriculum-card>
            <div class="curContent mt-4">
                <cur-list></cur-list>
                <cur-aside></cur-aside>
            </div>
        </div>
    </div>
</template>

<script>
    import curriculumCard from "../components/curriculumDetail/curriculumCard";
    import curAside from "../components/curriculumDetail/curAside";
    import curList from "../components/curriculumDetail/curList";

    export default {
        name: "curriculumDetail",
        components:{
          curriculumCard,
            curAside,
            curList
        },
        mounted() {

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
    @import "../assets/css/curriculumDetail/curriculumDetail";
</style>
