<template>
    <div class="search mr-3">
            <!--<input type="text" id="search" v-model="search">-->
            <el-input
                    placeholder="请输入内容"
                    suffix-icon="el-icon-search"
                    @keydown.enter="toSearch()"
                    v-model="search">
            </el-input>
    </div>
</template>

<script>
    export default {
        name: "search",
        data(){
            return{
                search:''
            }
        },
        methods:{
            toSearch(){

            }
        }
    }
</script>

<style lang="less">

</style>
