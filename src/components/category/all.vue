<template>
    <div class="all">
        <div class="row row-cols-1 row-cols-md-3">
            <div v-for="item in 9">
                <recommend-item/>
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
    import category from "../../assets/js/category";
    import recommendItem from "../home/recommend/recommendItem";

    export default {
        name: "all",
        components:{
          recommendItem
        },
        data(){
          return {

          }
        },
        mounted() {
            category.typeClassAdd(1);
            category.changeBgTitle('全部课程');
            this.$store.commit('showCur','00');
            this.$nextTick(() => {
                this.$store.commit('activeCur','1');
            })
        },
        beforeRouteLeave(to, from, next){
            category.typeClassRemove(1);
            next();
        },

        methods:{
            handleCurrentChange(val) {
                console.log(val);
            },
        }
    }
</script>

<style scoped>

</style>
