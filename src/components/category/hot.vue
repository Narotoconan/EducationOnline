<template>
    <div class="hot">
        <div class="container">
            <h1>hot</h1>
        </div>

    </div>
</template>

<script>
    import category from "../../assets/js/category";

    export default {
        name: "hot",
        data(){
            return {

            }
        },
        mounted() {
            category.typeClassAdd(5);
            category.curAdd(1)
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