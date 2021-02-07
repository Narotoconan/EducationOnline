<template>
    <div class="sign">
        <div class="loginTitle">欢迎注册账号 <span style="font-family: 华文细黑">:)</span></div>
        <div class="signForm">
            <div class="input userName">
                <div>
                    <i class="bi bi-person-fill mr-3"></i>
                    <div class="d-inline-block">
                        <div class="mb-1">
                            <small class="text-black-50">用户名/ Name</small>
                        </div>
                        <input type="text" v-model="sign.userName" placeholder="用户名称">
                    </div>
                </div>
            </div>
            <div class="input userEmail">
                <div>
                    <i class="bi bi-envelope-fill mr-3"></i>
                    <div class="d-inline-block">
                        <div class="mb-1">
                            <small class="text-black-50">邮箱/ Email</small>
                        </div>
                        <input type="email" v-model="sign.userEmail" placeholder="绑定邮箱">
                    </div>
                </div>
            </div>
            <div class="input userPassword">
                <div>
                    <i class="bi bi-key-fill mr-3"></i>
                    <div class="d-inline-block">
                        <div class="mb-1">
                            <small class="text-black-50">密码/ Password</small>
                        </div>
                        <input type="password" v-model="sign.userPassword" placeholder="密码">
                    </div>
                </div>
            </div>
            <div class="input userGender">
                <div>
                    <i class="bi bi-exclude mr-3"></i>
                    <div class="d-inline-block">
                        <div class="mb-1">
                            <small class="text-black-50">性别/ Gender</small>
                        </div>
                        <el-radio v-model="sign.userGender" label="1">男性</el-radio>
                        <el-radio v-model="sign.userGender" label="2">女性</el-radio>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-4" style="text-align: center">
            <el-button type="warning" round plain> 注 册 账 号 </el-button>
        </div>
    </div>
</template>

<script>
    import $ from "jquery";

    export default {
        name: "toSign",
        data(){
            return{
                sign:{
                    userName:'',
                    userEmail:'',
                    userPassword:'',
                    userTelephone:'',
                    userGender:'1'
                }
            }
        },
        mounted() {
            this.iconColor()
        },
        methods:{
            iconColor(){
                $(".input input").on("focus",function () {
                    $(this).parent().siblings(".bi").addClass("iconColor");
                }).on("blur",function () {
                    $(this).parent().siblings(".bi").removeClass("iconColor")
                })
            }
        }
    }
</script>

<style scoped>

</style>