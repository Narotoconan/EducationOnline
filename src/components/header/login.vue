<template>
    <div class="login ml-5">
        <div class="toLogin" v-if="!isLogin">
            <button type="button" class="btn btn-outline-warning" @click="toLogin('/login')">登录 / 注册</button>
        </div>
        <div class="userMessage" v-else>
            <el-dropdown>
                <span class="el-dropdown-link">
                    <el-avatar size="medium" :src="circleUrl" style="vertical-align: middle"></el-avatar>
                    <span style="font-weight: 600;margin-left: 0.7rem">Narotoconan</span>
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
                    <el-dropdown-item divided>退出登录</el-dropdown-item>
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
                isLogin: true,
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
            }
        },
        mounted() {
        },
        methods:{
            toRoute(path){
                this.$router.push(path);
            },
            toLogin(path){
                this.$store.commit('toLoginPage');
                this.$router.push(path);
            }
        }
    }
</script>

<style scoped>

</style>