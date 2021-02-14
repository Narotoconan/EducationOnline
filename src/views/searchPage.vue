<template>
    <div class="searchPage">
        <div class="container">
            <h1>{{ $route.query.w }}</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: "searchPage"
    }
</script>

<style lang="less">
    @import "../assets/css/searchPage/searchPage";
</style>
