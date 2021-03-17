<template>
    <div>
        <div id="toAvatar" @click="dialogUploadAvVisible= true">
            <div>修改头像</div>
        </div>
        <el-dialog title="头像修改" :visible.sync="dialogUploadAvVisible" width="55rem" :lock-scroll="false" :close-on-click-modal="false">
            <div class="mb-3" style="text-align: left">
                <div class="upload">
                    <label for="inputFile">
                        <el-tag type="success" effect="dark" @click="toCropper">上传图片</el-tag>
                    </label>
                    <input type="file" id="inputFile" hidden>
                </div>
                <div class="uploadBox">
                    <div class="cutPart">
                        <img src="" alt="" id="userAvatar">
                    </div>
                    <div class="previewPart">
                        <div class="preview"></div>
                    </div>
                </div>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogUploadAvVisible = false">取 消</el-button>
                <el-button type="warning" id="toUpload" @click="dialogUploadAvVisible = true">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import $ from 'jquery'
    import Cropper from 'cropperjs'

    export default {
        name: "changeAv",
        data(){
            return {
                dialogUploadAvVisible:false,
                dialogImageUrl: '',
                dialogVisible: false,
                showImg: String
            }
        },
        mounted() {
        },
        methods: {
            toCropper() {
                const userAvatar = $("#userAvatar")[0];
                const cropper = new Cropper(userAvatar, {
                    aspectRatio: 2 / 2,
                    viewMode: 2,
                    preview: '.preview'
                });
                $("#toUpload").on("click", function () {
                    const cas = cropper.getCroppedCanvas({
                        width: 100,
                        height: 100
                    });
                    const base64url = cas.toDataURL('image/jpeg');
                    console.log(base64url);
                });
                const inputFile = document.getElementById("inputFile");

                let vm = this;
                inputFile.addEventListener('change', function () {
                    const file = this.files[0];
                    const reader = new FileReader();
                    // 监听reader对象的的onload事件，当图片加载完成时，把base64编码賦值给预览图片
                    reader.addEventListener("load", function () {
                        vm.showImg = reader.result;
                        cropper.replace(vm.showImg,false)
                    }, false);
                    // 调用reader.readAsDataURL()方法，把图片转成base64
                    reader.readAsDataURL(file);

                }, false);
            },
        }
    }
</script>

<style lang="less">
    @import "~cropperjs/dist/cropper.min.css";
</style>
