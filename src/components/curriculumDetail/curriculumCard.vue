<template>
    <div class="curriculumCard">
        <div class="content" v-if="curriculum">
            <img :src="$store.state.targetURL+curriculum.img" alt="cover">
            <div class=" ml-3 contentText">
                <h3>{{ curriculum.title }}</h3>
                <div class="shortMg mt-4">
                    <div>
                        <i data-v-9ad2d3e8="" class="bi bi-collection-play-fill" style="color: rgb(255, 98, 131);"></i>
                        总播放量：{{ curriculum.viewCounts }}
                    </div>
                    <div>
                        <i data-v-9ad2d3e8="" class="bi bi-bookmark-plus-fill" style="color: rgb(255, 178, 89);"></i>
                        收藏人数：{{ curriculum.favoriteCounts }}
                    </div>
                </div>
                <div class="tag">
                    <el-tag type="success" @click="toCate(curriculum.categoryURLName,curriculum.categoryParentId)">
                        {{curriculum.categoryParent }}
                    </el-tag>
                    <el-tag type="warning" @click="toCate(curriculum.categoryURLName,curriculum.categoryChildrenId)">
                        {{ curriculum.categoryChildren }}
                    </el-tag>
                </div>
                <el-button type="primary">收藏课程</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "curriculumCard",
        props: {
            curriculum: Object
        },
        methods: {
            toCate(path, code) {
                this.$router.push({
                    path: '/category/' + path,
                    query: {
                        cur: code
                    }
                })
            },
        }
    }
</script>

<style scoped>

</style>
