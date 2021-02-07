<template>
    <div>
        <div id="toAvatar" @click="dialogUploadAvVisible = true">
            <div>修改头像</div>
        </div>
        <el-dialog title="头像修改" :visible.sync="dialogUploadAvVisible">
            <div class="mb-3" style="text-align: center">
                <el-upload
                        action="https://jsonplaceholder.typicode.com/posts/"
                        list-type="picture-card"
                        :auto-upload="false"
                        :on-preview="handlePictureCardPreview"
                        :limit="1"
                        name="userAvatar"
                        :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogUploadAvVisible = false">取 消</el-button>
                <el-button type="warning" @click="dialogUploadAvVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "changeAv",
        components:{

        },
        data(){
            return {
                dialogUploadAvVisible:false,
                dialogImageUrl: '',
                dialogVisible: false
            }
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        }
    }
</script>

<style lang="less">

</style>