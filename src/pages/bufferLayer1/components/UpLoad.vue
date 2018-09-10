<template>
  <div>
    <el-button>上传图片</el-button>
    <el-upload
      class="avatar-uploader"
      drag
      action="/api/bufferLayer1/img"
      :show-file-list="false"
      accept="image/*"
      :on-success="handleImageSuccess"
      :before-upload="beforeImageUpload" multiple>
      <i class="el-icon-upload"></i>
    <div class="el-upload__text">将图片拖到此处，或<em>点击上传</em></div>
    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>

    <el-upload
      class="avatar-uploader"
      action="/api/bufferLayer1/excel"
      :show-file-list="false"
      :on-success="handleExcelSuccess"
      :limit=1
      multiple
      method:="post"
      :on-preview="beforeExcelUpload"
      accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel,.csv,text/plain">
      <el-button size="small" type="primary" plain>上传Excel</el-button>
    </el-upload>
  </div>
</template>
<script>
  // import img from './../../../../attachment/BufferLayer1/demo1-c4a63edfa7c6e1824df15bf0b9922a4b.jpg'
  export default {
    data() {
      return {

      };
    },
    methods: {
      handleImageSuccess(res, file) {
        if(res.status==0){
          alert("sucess")
        }
      },
      handleExcelSuccess(res, file) {
        if(res.status==0){
          alert("sucess")
        }
      },
      beforeImageUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      beforeExcelUpload(file) {

      },
      clearMD5(value){
        return value.replace(/(.+)-(.{32})\.(.+)/, '$1.$3')
      }
    }
  }
</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>