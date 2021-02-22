<template>
    <div class="asideList">
        <div class="container pt-3">
            <div class="logo">
                <img src="../../assets/logo.png" alt="logo">
            </div>
            <ul class="list">
                <li @click="toRoute('/addTeacher')">
                    <aide-list-item path="addTeacher">
                        <i class="bi bi-person-bounding-box" slot="icon"></i>
                        <span slot="name">添加老师</span>
                    </aide-list-item>
                </li>
                <li @click="toRoute('/addCurriculum')">
                    <aide-list-item path="addCurriculum">
                        <i class="bi bi-folder-plus" slot="icon"></i>
                        <span slot="name">添加课程</span>
                    </aide-list-item>
                </li>
                <li @click="toRoute('/addVideo')">
                    <aide-list-item path="addVideo">
                        <i class="bi bi-play-btn" slot="icon"></i>
                        <span slot="name">添加视频</span>
                    </aide-list-item>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'

    import AideListItem from "./AideListItem";
    export default {
        name: "AsideList",
        components:{
            AideListItem
        },
        mounted() {
            this.fullList()
        },
        methods:{
            toRoute(path){
                this.$router.push(path)
            },
            fullList(){
                $(".asideList").css({
                    height:$(window).height()
                })
            }
        }
    }
</script>

<style lang="less">
    .asideList{
        background-color: #fff;

    }
    .logo{
        text-align: center;
        img{
            width: 100%;
        }
    }
    .list{
        padding-left: 0;
        font-size: 1.25rem;
        font-weight: 700;
        font-family: 宋体;
        text-align: center;
        cursor: default;
        li{
            margin-top: 2.5rem;

        }
        .aideListItem{
            padding: 0.6rem 0;
            margin: 0 10px;
            border-radius: 30px;
        }
        i{
            font-size: 1.55rem;
            vertical-align: middle;
            margin-right: 1rem;
        }
        span{

        }
    }
</style>
