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
            category.typeClassAdd(3)
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