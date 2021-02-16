<template>
    <div class="hot">
        <h1>hot</h1>
    </div>
</template>

<script>
    import category from "../../assets/js/category";
    import $ from 'jquery'

    export default {
        name: "hot",
        data(){
            return {

            }
        },
        mounted() {
            category.typeClassAdd(5);
            category.changeBgTitle('热门课程');
            this.$store.commit('showCur','40');
            //category.curAdd(1)
            //this.$store.commit('activeCur','1');
            //$(".curList dd:nth-of-type(1)").addClass("curItemActive");
            this.$nextTick(() => {
                this.$store.commit('activeCur','1');
            })
        },
        beforeRouteLeave(to, from, next){
            category.typeClassRemove(5);
            next();
        },

        methods:{

        }
    }
</script>

<style scoped>

</style>
