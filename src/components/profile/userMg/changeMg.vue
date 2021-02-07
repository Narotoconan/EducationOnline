<template>
    <div>
        <div class="mt-3" style="color: #e37426;" @click="dialogFormVisible = true">
            修改个人信息
            <span style="font-family: 宋体,sans-serif;font-weight: 700"> > </span>
        </div>
        <el-dialog title="个人信息修改" :visible.sync="dialogFormVisible">
            <el-form :model="form" style="width: 90%">
                <el-form-item label="用户名" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="电话号码" :label-width="formLabelWidth">
                    <el-input v-model="form.telephone" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="电子邮箱" :label-width="formLabelWidth">
                    <el-input v-model="form.email" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="性别" :label-width="formLabelWidth">
                    <el-radio v-model="form.gender" label="1" value="1">男</el-radio>
                    <el-radio v-model="form.gender" label="2" value="0">女</el-radio>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary"
                           @click="dialogFormVisible = false"
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
            return {
                form:{
                    name:'',
                    telephone:'',
                    email:'',
                    gender:''
                },
                dialogFormVisible: false,
                formLabelWidth: '120px'
            }
        },
    }
</script>

<style scoped>

</style>