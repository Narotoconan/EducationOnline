<template>
    <div >
        <div @click="dialogPasswordVisible = true" class="changePsw">
            <el-button type="warning" round>修改密码</el-button>
        </div>
        <el-dialog title="密码修改" :visible.sync="dialogPasswordVisible">
            <el-form :model="changePsw" style="width: 90%">
                <el-form-item label="旧密码" :label-width="formLabelWidth">
                    <el-input placeholder="请输入旧密码" v-model="changePsw.oldPsw" show-password></el-input>
                </el-form-item>
                <el-form-item label="新密码" :label-width="formLabelWidth">
                    <el-input placeholder="请输入新密码" v-model="changePsw.newPsw" show-password></el-input>
                </el-form-item>
                <el-form-item label="确认密码" :label-width="formLabelWidth">
                    <el-input placeholder="请确认密码" v-model="changePsw.reNewPsw" show-password></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogPasswordVisible = false">取 消</el-button>
                <el-button type="primary"
                           @click="dialogPasswordVisible = false"
                           style="background-color: #e37426;border-color: #e37426">
                    确认修改
                </el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "changePsw",
        data(){
          return {
              changePsw: {
                  oldPsw:'',
                  newPsw:'',
                  reNewPsw:''
              },
              dialogPasswordVisible: false,
              formLabelWidth: '120px'
          }
        },
    }
</script>

<style scoped>

</style>