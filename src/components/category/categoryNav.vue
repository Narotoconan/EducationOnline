<template>
    <div class="categoryNav">
        <div class="container">
            <span class="d-inline-block"></span>
            <dl style="border-bottom: 1px dashed #cbcbcb" class="categoryType">
                <dt>分类：</dt>
                <dd @click="typeClick('00')">全部课程</dd>
                <dd @click="typeClick('10')">数学课程</dd>
                <dd @click="typeClick('20')">英语课程</dd>
                <dd @click="typeClick('30')">代码课程</dd>
                <dd @click="typeClick('40')">热门课程</dd>
            </dl>
            <dl class="curList">
                <dt>课程：</dt>
                <dd v-for="item in curriculum"
                    @click="toCur($route.path,item.theCode),curClass()"
                    :itemCode="item.theCode">{{ item.name }}
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
    import category from "../../assets/js/category";

    export default {
        name: "categoryNav",
        mounted() {
            this.curriculum = this.all
        },
        data() {
            return {
                curriculum: [],
                all: [
                    {
                        name: '全部课程',
                        theCode: '00'
                    }
                ],
                hot: [
                    {
                        name: '全部热门',
                        theCode: '40'
                    }
                ],
                math: [
                    {
                        name: '全部数学',
                        theCode: '10'
                    },
                    {
                        name: '高考数学',
                        theCode: '11'
                    },
                    {
                        name: '考研数学',
                        theCode: '12'
                    },
                    {
                        name: '线性代数',
                        theCode: '13'
                    },
                    {
                        name: '概率论',
                        theCode: '14'
                    },
                ],
                english: [
                    {
                        name: '全部英语',
                        theCode: '20'
                    },
                    {
                        name: '高考英语',
                        theCode: '21'
                    },
                    {
                        name: '考研英语',
                        theCode: '22'
                    },
                    {
                        name: '英语四级',
                        theCode: '23'
                    },
                    {
                        name: '英语六级',
                        theCode: '24'
                    },
                ],
                program: [
                    {
                        name: '全部编程',
                        theCode: '30'
                    },
                    {
                        name: 'Java',
                        theCode: '31'
                    },
                    {
                        name: 'C语言',
                        theCode: '32'
                    },
                    {
                        name: 'Python',
                        theCode: '33'
                    },
                    {
                        name: 'HTML前端',
                        theCode: '34'
                    },
                ]
            }
        },
        methods: {
            typeClick(theCode) {
                switch (theCode) {
                    case '00':
                        this.curriculum = this.all;
                        this.toCur('/category/all', theCode);
                        category.changeBg('全部课程');
                        category.curRemove();
                        category.curAdd(1);
                        break;
                    case '10':
                        this.curriculum = this.math;
                        this.toCur('/category/math', theCode);
                        category.changeBg('数学课程');
                        category.curRemove();
                        category.curAdd(1);
                        break;
                    case '20':
                        this.curriculum = this.english;
                        this.toCur('/category/english', theCode);
                        category.changeBg('英语课程');
                        category.curRemove();
                        category.curAdd(1);
                        break;
                    case '30':
                        this.curriculum = this.program;
                        this.toCur('/category/program', theCode);
                        category.changeBg('代码编程');
                        category.curRemove();
                        category.curAdd(1);
                        break;
                    case '40':
                        this.curriculum = this.hot;
                        this.toCur('/category/hot', theCode);
                        category.changeBg('热门课程');
                        category.curRemove();
                        category.curAdd(1);
                        break;
                }
            },
            toCur(path, theCode) {
                this.$router.push({
                    path: path,
                    query: {
                        cur: theCode
                    }
                });
            },
            curClass() {
                switch (this.$route.query.cur) {
                    case '00':
                    case '10':
                    case '20':
                    case '30':
                    case '40':
                        category.curRemove();
                        category.curAdd(1);
                        break;
                    case '11':
                    case '21':
                    case '31':
                        category.curRemove();
                        category.curAdd(2);
                        break;
                    case '12':
                    case '22':
                    case '32':
                        category.curRemove();
                        category.curAdd(3);
                        break;
                    case '13':
                    case '23':
                    case '33':
                        category.curRemove();
                        category.curAdd(4);
                        break;
                    case '14':
                    case '24':
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