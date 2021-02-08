<template>
    
</template>

<script>

    import category from "../../assets/js/category";

    export default {
        name: "math",
        data(){
            return {

            }
        },
        mounted() {
            category.typeClassAdd(2);
            category.changeBgTitle('数学课程');
            this.$store.commit('showCur','10');
            this.$nextTick(() => {
                switch (this.$route.query.cur) {
                    case '10':
                        this.$store.commit('activeCur','1');
                        break;
                    case '11':
                        this.$store.commit('activeCur','2');
                        break;
                    case '12':
                        this.$store.commit('activeCur','3');
                        break;
                    case '13':
                        this.$store.commit('activeCur','4');
                        break;
                    case '14':
                        this.$store.commit('activeCur','5');
                        break;
                }
            })
        },
        beforeRouteLeave(to, from, next){
            category.typeClassRemove(2);
            next();
        },
        methods:{
        }
    }
</script>

<style scoped>

</style>