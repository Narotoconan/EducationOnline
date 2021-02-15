<template>
    <div class="searchPage">
        <div style="height: 100px"></div>
        <div class="container">
            <h4>{{ $store.state.searchPage.searchList }}</h4>
        </div>
    </div>
</template>

<script>

    export default {
        name: "searchPage",
        mounted() {
            this.toSearch()
        },
        methods:{
            toSearch(){
                this.$store.dispatch('getSearchList');
            }
        }
    }
</script>

<style lang="less">
    @import "../assets/css/searchPage/searchPage";
</style>
