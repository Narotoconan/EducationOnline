<template>
    <div>
        <div class="mt-3" style="color: #e37426;" @click="dialogFormVisible = true">
            修改个人信息
            <span style="font-family: 宋体,sans-serif;font-weight: 700"> > </span>
        </div>
        <el-dialog title="个人信息修改" :visible.sync="dialogFormVisible" :lock-scroll="false" :close-on-click-modal="false">
            <el-form :model="form" style="width: 90%" :rules="rules" ref="ruleForm" status-icon>
                <el-form-item label="用户名" :label-width="formLabelWidth" prop="username">
                    <el-input v-model="form.username" autocomplete="off" ></el-input>
                </el-form-item>
                <el-form-item label="电话号码" :label-width="formLabelWidth">
                    <el-input v-model="form.userTel" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="电子邮箱" :label-width="formLabelWidth" prop="userEmail">
                    <el-input v-model="form.userEmail" autocomplete="off" ></el-input>
                </el-form-item>
                <el-form-item label="性别" :label-width="formLabelWidth">
                    <el-radio v-model="form.userGender" label="1" value="1">男</el-radio>
                    <el-radio v-model="form.userGender" label="0" value="0">女</el-radio>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary"
                           @click="submitForm('ruleForm')"
                           style="background-color: #e37426;border-color: #e37426">
                    确认修改
                </el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "changeMg",
        data(){
            const checkUserName = (rule, value, callback) => {
                if (!value.split(" ").join("")) {
                    return callback(new Error('名称不能为空'));
                }
                callback();
            }
            const checkUserEmail = (rule, value, callback) => {
                if (!value.split(" ").join("")) {
                    return callback(new Error('邮箱不能为空'));
                }
                callback();
            }
            return {
                form:{},
                originForm:{},
                toUpForm:{
                    uid:this.$store.getters.getUser.userId
                },
                dialogFormVisible: false,
                formLabelWidth: '120px',
                rules: {
                    username: [
                        {validator: checkUserName, trigger: 'blur'}
                    ],
                    userEmail: [
                        {validator: checkUserEmail, trigger: 'blur'}
                    ]
                }
            }
        },
        mounted() {
            this.getMessage()
        },
        watch: {
            'form.username': {
                handler: function (val){
                    if (val !== this.originForm.username) {
                        this.toUpForm.username = val
                    } else {
                        this.$delete(this.toUpForm, 'username')
                    }
                }
            },
            'form.userTel': {
                handler: function(val) {
                    if (val !== this.originForm.userTel) {
                        this.toUpForm.userTel = val
                    } else {
                        this.$delete(this.toUpForm, 'userTel')
                    }
                }
            },
            'form.userEmail': {
                handler: function(val) {
                    if (val !== this.originForm.userEmail) {
                        this.toUpForm.userEmail = val
                    } else {
                        this.$delete(this.toUpForm, 'userEmail')
                    }
                }
            },
            'form.userGender': {
                handler: function(val) {
                    if (val !== String(this.originForm.userGender)) {
                        this.toUpForm.userGender = val
                    } else {
                        this.$delete(this.toUpForm, 'userGender')
                    }
                }
            }
        },
        methods:{
            getMessage() {
                this.form = this.$store.getters.getUser
                this.originForm.username = this.$store.getters.getUser.username
                this.originForm.userEmail = this.$store.getters.getUser.userEmail
                this.originForm.userTel = this.$store.getters.getUser.userTel
                this.originForm.userGender = this.$store.getters.getUser.userGender
                this.form.userGender = String(this.form.userGender)
            },
            submitForm(formName){
                this.$refs[formName].validate((valid) => {
                    if (!valid) {
                        this.$message.error('填写格式有误')
                        return false
                    }
                    this.toChange()
                });
            },
            toChange(){
                console.log(this.toUpForm);
            }
        }
    }
</script>

<style scoped>

</style>
