<template>
    <div>
        <div id="toAvatar" @click="dialogUploadAvVisible= true">
            <el-tag effect="dark" type="warning">添加头像</el-tag>
            <i class="bi bi-check-circle-fill" style="font-size: 1rem;margin-left: 1rem;color: #27d332" v-show="isOk"></i>
        </div>
        <div class="show mt-3">
            <img src="" alt="">
        </div>
        <el-dialog title="老师头像" :visible.sync="dialogUploadAvVisible" width="55rem">
            <div class="mb-1" style="text-align: left">
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
        name: "TeacherAvatar",
        data() {
            return {
                dialogUploadAvVisible: false,
                showImg: null,
                cropper: null,
                isOk:false
            }
        },
        methods: {
            toCropper() {
                const userAvatar = $("#userAvatar")[0];
                this.cropper = new Cropper(userAvatar, {
                    aspectRatio: 3 / 3,
                    autoCropArea:1.5,
                    viewMode: 0,
                    preview: '.preview'
                });

                let vm = this;

                $("#toUpload").on("click", function () {
                    const cas = vm.cropper.getCroppedCanvas({
                        width: 100 * 2,
                        height: 100 * 2
                    });
                    cas.toBlob(function (e) {
                        vm.$emit('toAvatarBlob', e);  //生成Blob的图片格式
                    });
                    const base64url = cas.toDataURL('image/jpeg');
                    $(".show img").attr({
                        src: base64url
                    });
                    vm.dialogUploadAvVisible = false;
                    vm.isOk=true
                });
                const inputFile = document.getElementById("inputFile");

                inputFile.addEventListener('change', function () {
                    const file = this.files[0];
                    const reader = new FileReader();
                    // 监听reader对象的的onload事件，当图片加载完成时，把base64编码賦值给预览图片
                    reader.addEventListener("load", function () {
                        vm.showImg = reader.result;
                        vm.cropper.replace(vm.showImg, false);
                    }, false);
                    // 调用reader.readAsDataURL()方法，把图片转成base64
                    reader.readAsDataURL(file);

                }, false);
            },
            destroy() {
                this.cropper.destroy()
                $(".show img").attr({
                    src: null
                });
                this.isOk=false
            }
        }
    }
</script>

<style lang="less">
    @import "~cropperjs/dist/cropper.min.css";

    .el-dialog {
        border-radius: 15px;
    }

    .el-dialog__body {
        padding-top: 0;
    }

    .uploadBox {
        height: 25rem;
        display: flex;

        .cutPart {
            flex: 10;
            overflow: hidden;
            background-color: #d3d3d3;
            border-radius: 15px;
        }

        .previewPart {
            margin-left: 15px;
            flex: 3;

            .preview {
                height: 190px;
                width: 190px;
                overflow: hidden;
                border-radius: 20px;
            }
        }
    }

    .show {
        height: 100px;
        width: 100px;
        border: 1px solid #d3d3d3;

        img {
            border: none !important;
            max-height: 100%;
            max-width: 100%;
        }
    }
</style>
