<template>
    <div class="searchPage">
        <div style="height: 100px"></div>
        <div class="container pr-0 pl-0">
            <div class="searchContent mt-5 pb-5">
                <div class="left">
                    <div class="title">
                        <span>搜索结果</span>
                        <small class="text-black-50 ml-3">搜索<span style="color: #ffb259;letter-spacing: 0">“{{ $route.query.w }}”</span>共找到到125个相关课程</small>
                    </div>
                    <div class="searchList mt-3">
                        <search-card></search-card>
                        <search-card></search-card>
                        <search-card></search-card>
                    </div>
                    <div class="mt-5" style="text-align: center">
                        <el-pagination
                                background
                                layout="prev, pager, next"
                                :page-size="4"
                                :total="16"
                                @current-change="handleCurrentChange">
                        </el-pagination>
                    </div>
                </div>
                <div class="right">
                    <div class="hotCur">
                        <span>热门课程</span>
                        <small class="text-black-50 float-right" @click="$router.push({path:'/category/hot',query:{cur:'40'}})">查看全部 <span style="font-family: 宋体;font-weight: 700"> > </span></small>
                        <div>
                            <hot-card></hot-card>
                            <hot-card></hot-card>
                            <hot-card></hot-card>
                            <hot-card></hot-card>
                            <hot-card></hot-card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import searchCard from "../components/searchPage/searchCard";
    import hotCard from "../components/searchPage/hotCard";
    export default {
        name: "searchPage",
        components:{
          searchCard,
            hotCard
        },
        mounted() {
            this.toSearch()
        },
        methods:{
            toSearch(){
                this.$store.dispatch('getSearchList');
            },
            handleCurrentChange(val) {
                console.log(val);
            },
            toRoute(path){

            }
        }
    }
</script>

<style lang="less">
    @import "../assets/css/searchPage/searchPage";
</style>
