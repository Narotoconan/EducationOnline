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
            this.$store.commit('showCur','10');
        },
        beforeRouteLeave(to, from, next){
            category.typeClassRemove(2);
            next();
        },
        methods:{
            mathCur(){
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