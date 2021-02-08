<template>
    <div class="all">
        <h1>all</h1>
    </div>
</template>

<script>
    import category from "../../assets/js/category";

    export default {
        name: "all",
        data(){
          return {

          }
        },
        mounted() {
            category.typeClassAdd(1);
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

        }
    }
</script>

<style scoped>

</style>