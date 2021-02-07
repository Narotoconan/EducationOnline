<template>
    <div class="browsed pt-4" v-infinite-scroll="load" @scroll="pointColor">
        <browsed-card v-for="item in arr" :count="item.number"></browsed-card>
    </div>
</template>

<script>
    import $ from 'jquery'
    import browsedCard from "./browsedCard";

    export default {
        name: "history",
        components: {
            browsedCard
        },
        data() {
            return {
                arr: [
                    {number: 1},
                    {number: 2},
                    {number: 3},
                    {number: 4},
                    {number: 5},
                ],
                pointC: [
                    "#fcb1b1",
                    "#96f7d2",
                    "#59d4e8",
                    "#ffcef3",
                    ""
                ]
            }
        },
        mounted() {
            this.pointColor();
        },
        methods: {
            load() {
                let len = this.arr.length;
                for (let i = 0; i < 3; i++) {
                    this.arr.push({number: len++})
                }
            },
            pointColor() {
                let len = this.arr.length;
                let vm = this;
                for (let i = 1; i <= len; i++) {
                    let index = i % 4;
                    $(".browsed>div:nth-of-type("+i+") .browsedPoint").css({
                        "background-color": vm.pointC[index]
                    });
                }
            },

        }
    }
</script>

<style scoped>

</style>