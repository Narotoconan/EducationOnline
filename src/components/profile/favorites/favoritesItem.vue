<template>
    <div class="favoritesCard">
        <img src="../../../assets/img/test/test1.webp" alt="">
        <div class="cardContent d-inline-block ml-3">
            <div class="cardTitle">改稿修炼手册！一个能抢钱的Banner到底怎么排？</div>
            <div class="mt-3">
                <div class="d-inline-block">
                    <i class="bi bi-collection-play-fill" style="color: #ff6283"> </i>
                    <span>播放量：12542</span>
                </div>
                <div class="d-inline-block ml-4">
                    <i class="bi bi-bookmark-plus-fill" style="color: #ffb259"></i>
                    <span>收藏量：4142</span>
                </div>
            </div>
            <div class="cardFooter">
                <el-avatar size="small" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
                <span class="ml-2">William.will</span>
                <div class="float-right">
                    <el-tag type="success" size="small">编程课</el-tag>
                    <el-tag type="warning" size="small" style="margin-left: 5px">Python</el-tag>
                </div>
            </div>
        </div>
        <div class="favoritesDelete" @click="favoritesDelete">
            <i class="bi bi-x-circle"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "favoritesItem",
        methods:{
            favoritesDelete() {
                this.$confirm('是否取消此收藏？, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        }
    }
</script>

<style scoped>

</style>