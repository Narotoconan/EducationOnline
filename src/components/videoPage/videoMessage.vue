<template>
    <div class="videoMessage pt-5 pb-5">
        <div class="container pr-0 pl-0">
            <div class="videoTitle h2">PS自学手册！ NO.1 软件应用与界面布局</div>
            <div class="videoInfo mb-4 mt-4">
                <el-button type="primary" icon="el-icon-video-play" size="mini">播放量：12521</el-button>
                <a href="https://www.bilibili.com/video/BV1Yt411H7An" target="_blank">
                    <el-button type="success" icon="el-icon-video-camera" size="mini">B站视频：BV1Yt411H7An</el-button>
                </a>
                <el-button type="warning" icon="el-icon-time" size="mini"@click="$router.push('/category/program?cur=30')">类别：代码编程</el-button>
                <el-button type="danger" icon="el-icon-s-opportunity" size="mini" @click="$router.push('/category/program?cur=31')">课程：Java</el-button>
            </div>
            <div class="videoBox">
                <iframe src="https://player.bilibili.com/player.html?bvid=BV1Yt411H7An&high_quality=1&page=1&danmaku=0"
                        frameborder="no" width="100%" height="100%" allowfullscreen="true"
                        sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts">
                </iframe>
            </div>
            <div class="row introduction">
                <div class="col-9 description">
                    <div class="intCard">
                        <div class="title">
                            <i class="bi bi-chat-left-text-fill"></i>
                            课程内容
                        </div>
                        <p>《文章》包括各种文体的著作、作品，如诗歌、戏剧、小说、科学论文，记叙文、议论文、说明文、应用文等等。“千古文章未尽才”“文章千古事”“文章憎命达”“板凳要坐十年冷、文章不写一字空”“积句而成章，积章而成篇”“言出为论，下笔成章”等，都是现在所说的文章的意思。更广义的文章，也包含“学问”“奥秘”等意思，如“洞明世事皆学问，人情练达即文章”就是。</p>
                    </div>
                </div>
                <div class="col-3 teacher">
                    <div class="intCard">
                        <div class="tBorder w-75">
                            <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="avatar">
                            <h3 class="mt-3 mb-3">William</h3>
                            <small class="text-black-50">
                                仁才培训中心语文名教师，有40余年高中语文教学经验，有10年高考阅卷体验。
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "videoMessage"
    }
</script>

<style scoped>

</style>
