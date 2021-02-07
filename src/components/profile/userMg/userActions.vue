<template>
    <div class="userActions">
        <div class="container h-100">
            <div class="row h-50">
                <div class="col pt-2">
                    <actions-item :message="user.id" name="用户ID">
                        <template v-slot:actionsItemIcon>
                            <i class="bi bi-credit-card-2-front" style="color: #ff6283"></i>
                        </template>
                    </actions-item>
                </div>
                <div class="col pt-2">
                    <actions-item :message="user.name" name="用户名">
                        <template v-slot:actionsItemIcon>
                            <i class="bi bi-person-lines-fill" style="color: #74ff6d"></i>
                        </template>
                    </actions-item>
                </div>
                <div class="col pt-2">
                    <actions-item :message="user.telephone" name="电话号码">
                        <template v-slot:actionsItemIcon>
                            <i class="bi bi-phone-vibrate" style="color: #b757ff"></i>
                        </template>
                    </actions-item>
                </div>
            </div>
            <div class="row h-50">
                <div class="col pt-2">
                    <actions-item :message="user.email" name="电子邮箱">
                        <template v-slot:actionsItemIcon>
                            <i class="bi bi-envelope-fill" style="color: #3d23ff"></i>
                        </template>
                    </actions-item>
                </div>
                <div class="col pt-2">
                    <actions-item :message="user.signDate" name="注册日期">
                        <template v-slot:actionsItemIcon>
                            <i class="bi bi-calendar-week" style="color: #ffb259"></i>
                        </template>
                    </actions-item>
                </div>
                <div class="col pt-2">
                    <actions-item :message="user.gender" name="用户性别">
                        <template v-slot:actionsItemIcon>
                            <i class="bi bi-exclude" style="color: #ff2850"></i>
                        </template>
                    </actions-item>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    import actionsItem from "./actionsItem";

    export default {
        name: "userActions",
        components:{
            actionsItem
        },
        data() {
            return {
                user: {
                    id: '10020120',
                    name: 'william.will',
                    gender: '男',
                    email: 'william.will@foxmail.com',
                    telephone: '14584578521',
                    signDate: '2020-04-20'
                }
            }
        },
        mounted() {

        },
        methods: {

        }
    }
</script>

<style scoped>

</style>