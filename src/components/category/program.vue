<template>
    <div>
        <h1>{{ $route.query.cur }}</h1>
    </div>
</template>

<script>

    import category from "../../assets/js/category";

    export default {
        name: "program",
        data(){
            return {

            }
        },
        mounted() {
            category.typeClassAdd(4);
            this.$store.commit('showCur','30');
            this.$nextTick(() => {
                switch (this.$route.query.cur) {
                    case '30':
                        this.$store.commit('activeCur','1');
                        break;
                    case '31':
                        this.$store.commit('activeCur','2');
                        break;
                    case '32':
                        this.$store.commit('activeCur','3');
                        break;
                    case '33':
                        this.$store.commit('activeCur','4');
                        break;
                    case '34':
                        this.$store.commit('activeCur','5');
                        break;
                }
            })
        },
        beforeRouteLeave(to, from, next){
            category.typeClassRemove(4);
            next();
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>