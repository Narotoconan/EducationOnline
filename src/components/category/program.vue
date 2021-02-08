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

        },
        beforeRouteLeave(to, from, next){
            category.typeClassRemove(4);
            next();
        },
        methods:{
            programCur(){
                switch (this.$route.query.cur) {
                    case '30':
                        category.curRemove();
                        category.curAdd(1);
                        break;
                    case '31':
                        category.curRemove();
                        category.curAdd(2);
                        break;
                    case '32':
                        category.curRemove();
                        category.curAdd(3);
                        break;
                    case '33':
                        category.curRemove();
                        category.curAdd(4);
                        break;
                    case '34':
                        category.curRemove();
                        category.curAdd(5);
                        break;
                }
            }
        }
    }
</script>

<style scoped>

</style>