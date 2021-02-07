<template>
    <div class="index">
        <nav-bar></nav-bar>
        <router-view></router-view>
        <footerMg/>
        <el-backtop></el-backtop>
    </div>
</template>

<script>
    import navBar from "../components/header/navBar";
    import footerMg from "../components/footer/footerMg";

    export default {
        name: "index",
        components:{
            navBar,
            footerMg
        }
    }
</script>

<style scoped>

</style>