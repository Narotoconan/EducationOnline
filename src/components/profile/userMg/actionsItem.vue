<template>
    <div class="actionsItem">
        <div>
            <slot name="actionsItemIcon"></slot>
        </div>
        <h5 class="mt-3">{{ name }}</h5>
        <div class="mt-2" style="font-weight: 700">{{ message }}</div>
    </div>
</template>

<script>
    export default {
        name: "actionsItem",
        props:{
            message:String,
            name:String
        }
    }
</script>

<style scoped>

</style>