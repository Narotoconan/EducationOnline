<template>
    <div class="login ml-5">
        <div class="toLogin" v-if="!$store.getters.checkLogin">
            <a href="/login">
                <button type="button" class="btn btn-outline-warning">登录 / 注册</button>
            </a>
        </div>
        <div class="userMessage" v-else>
            <el-dropdown>
                <span class="el-dropdown-link">
                    <el-avatar size="medium" :src="circleUrl" style="vertical-align: middle"></el-avatar>
                    <span style="" class="userName">{{ userName }}</span>
                </span>
                <el-dropdown-menu slot="dropdown" style="width: inherit;">
                    <el-dropdown-item>
                        <div @click="toRoute('/profile')" style="padding: 0 20px">
                            个人信息
                        </div>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <div @click="toRoute('/profile/favorites')">
                            收藏课程
                        </div>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <div @click="toRoute('/profile/browsed')">
                            浏览历史
                        </div>
                    </el-dropdown-item>
                    <el-dropdown-item divided>
                        <div @click="exitLogin">
                            退出登录
                        </div>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
                userName:' '
            }
        },
        mounted() {
            this.getUserMg()
        },
        methods:{
            toRoute(path){
                this.$router.push(path);
            },
            toLogin(path){
                this.$store.commit('toLoginPage');
                this.$router.push(path);
            },
            getUserMg(){
                if (!this.$store.getters.checkLogin) return
                let userMessage = JSON.parse(localStorage.getItem('userMessage'))
                this.userName = userMessage.username
            },
            exitLogin(){
                this.$store.commit('exitLogin')
            }

        }
    }
</script>

<style scoped>

</style>
