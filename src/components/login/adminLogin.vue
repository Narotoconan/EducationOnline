<template>
    <div class="adminLogin">
        <div class="inputGroup">
            <div class="input admin">
                <div>
                    <i class="bi bi-person-bounding-box mr-3"></i>
                    <div class="d-inline-block">
                        <div class="mb-1">
                            <small class="text-black-50">管理员信息/ Message</small>
                        </div>
                        <input type="text" v-model="adminMessage" placeholder="管理员ID">
                    </div>
                </div>
            </div>
            <div class="input password">
                <div>
                    <i class="bi bi-stack mr-3"></i>
                    <div class="d-inline-block">
                        <div class="mb-1">
                            <small class="text-black-50">管理员密码/ Password</small>
                        </div>
                        <input type="password" v-model="adminPassword" placeholder="密码">
                    </div>
                </div>
            </div>
        </div>
        <div class="toSubmit mt-4">
            <el-button round type="warning">登 录</el-button>
            <el-button round style="margin-left: 1rem" @click="toRoute('/login/toLogin/user')">用户登录</el-button>
        </div>
    </div>
</template>

<script>
    import $ from "jquery";

    export default {
        name: "adminLogin",
        data(){
            return {
                adminMessage:'',
                adminPassword:''
            }
        },
        mounted() {
            this.iconColor()
        },
        methods:{
            toRoute(path){
                this.$router.push(path);
            },
            iconColor(){
                $(".input input").on("focus",function () {
                    $(this).parent().siblings(".bi").addClass("iconColor");
                }).on("blur",function () {
                    $(this).parent().siblings(".bi").removeClass("iconColor")
                })
            }
        },
    }
</script>

<style scoped>

</style>