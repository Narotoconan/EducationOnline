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
            category.typeClassAdd(2)
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