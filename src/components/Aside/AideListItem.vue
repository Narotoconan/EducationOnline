<template>
    <div :class="{aideListItem:true,active:isActive}" >
        <slot name="icon"></slot>
        <slot name="name"></slot>
    </div>
</template>

<script>
    export default {
        name: "AideListItem",
        props:{
          path:String
        },
        computed:{
            isActive(){
                return this.$route.path.indexOf(this.path) !== -1
            }
        }
    }
</script>

<style lang="less">
    .active{
        background-color: #f3bc7c;
        color: #fff;
    }
</style>
