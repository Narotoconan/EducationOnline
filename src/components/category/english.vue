<template>
    
</template>

<script>
    import category from "../../assets/js/category";
    export default {
        name: "english",
        data(){
            return {

            }
        },
        mounted() {
            category.typeClassAdd(3);
            this.$store.commit('showCur','20');
            this.englishCur();
        },
        beforeRouteLeave(to, from, next){
            category.typeClassRemove(3);
            next();
        },
        methods:{
            englishCur(){
                switch (this.$route.query.cur) {
                    case '20':
                        category.curRemove();
                        category.curAdd(1);
                        break;
                    case '21':
                        category.curRemove();
                        category.curAdd(2);
                        break;
                    case '22':
                        category.curRemove();
                        category.curAdd(3);
                        break;
                    case '23':
                        category.curRemove();
                        category.curAdd(4);
                        break;
                    case '24':
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