<template>
    <div id="app">
        <el-container>
            <el-aside width="250px">
                <aside-list></aside-list>
            </el-aside>
            <el-main>
                <keep-alive include="CurriculumList">
                    <router-view></router-view>
                </keep-alive>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import AsideList from "./components/Aside/AsideList";

    export default {
        name: 'app',
        components: {
            AsideList
        },
    }
</script>

<style lang="less">
    .el-main {
        background-color: #f3f6f9;
    }
    .itemCard{
        background-color: #fff;
        box-shadow: 0 15px 30px rgba(174, 174, 174, 0.1);
        border-radius: 15px;
        padding: 1rem;
    }
</style>
