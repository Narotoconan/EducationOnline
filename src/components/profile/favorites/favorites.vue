<template>
    <div class="favorites">
        <div class="row row-cols-1 row-cols-md-1">
            <div class="col mb-0 mt-3" v-for="item in 4">
                <favorites-item></favorites-item>
            </div>
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
</template>

<script>
    import favoritesItem from "./favoritesItem";

    export default {
        name: "favorites",
        components: {
            favoritesItem
        },
        data() {
            return {
                arr: [
                    {name: 'will'},
                    {name: 'kjh'},
                    {name: 'wdse'},
                    {name: 'fvgf'},
                ]
            }
        },
        methods: {
            handleCurrentChange(val) {
                console.log(val);
            }
        }
    }
</script>

<style lang="less">

</style>