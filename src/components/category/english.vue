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
            this.$nextTick(() => {
                switch (this.$route.query.cur) {
                    case '20':
                        this.$store.commit('activeCur','1');
                        break;
                    case '21':
                        this.$store.commit('activeCur','2');
                        break;
                    case '22':
                        this.$store.commit('activeCur','3');
                        break;
                    case '23':
                        this.$store.commit('activeCur','4');
                        break;
                    case '24':
                        this.$store.commit('activeCur','5');
                        break;
                }
            })
        },
        beforeRouteLeave(to, from, next){
            category.typeClassRemove(3);
            next();
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>