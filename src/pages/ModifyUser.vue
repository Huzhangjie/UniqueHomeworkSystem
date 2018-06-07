<template>
  <div class="wrapper">
    <h1 :type="type">修改{{type}}信息</h1>
    <el-table :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column prop="login_name"
        label="用户名">
      </el-table-column>
      <el-table-column prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column prop="school"
        label="学校">
      </el-table-column>
      <el-table-column style="text-algin:center" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" round @click="modify(scope.row)">修改</el-button>
          <el-button type="danger" round>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="修改信息" center :visible.sync="dialogModifyVisible">
      <el-form :model="form" size="mini">
        <el-form-item label="姓名" label-width="50px">
          <el-input :placeholder="form.name"></el-input>
        </el-form-item>
        <el-form-item label="学校" label-width="50px">
          <el-input :placeholder="form.school" ></el-input>
        </el-form-item>
        <el-form-item label="上传头像">
          <!-- <el-upload
            class="avatar-uploader" ref="upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-success="handleSuccess"
            :on-error="handleError"
            :auto-upload="false">
            <i class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload> -->
        <form action="http://127.0.0.1:8080/api/upload" method="post" enctype="multipart/form-data">  
          <input type="file" name="file"/>  
          <input type="submit" value="ok"/>  
        </form>  
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
          <el-button @click="dialogModifyVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      dialogModifyVisible: false,
      hasAvatar: true,
      fileList: [],
      isModify: true,
      type: '',
      form: {},
      tableData: [
        {
          login_name: 'Huzj',
          name: '胡章杰',
          school: '财大'
        },
        {
          login_name: 'Amy',
          name: 'Amy',
          school: '财大'
        },
        {
          login_name: '1234',
          name: 'sdadas',
          school: '财大'
        }
      ]
    }
  },
  beforeMount() {
    // console.log('guazai')
    axios.get('https://www.easy-mock.com/mock/5aed06d3efe0537f00d5c8d9/UniqueSystem/api/getAllUser')
      .then(data => {
        this.tableData = data.data.data.data
      })
  },
  methods: {
    modify(scope) {
      this.form = scope
      this.dialogModifyVisible = true
    },
    onSubmit() {
      this.$refs.upload.submit()
      // console.log(this.fileList)
    },
    handleSuccess(res, file, fileList) {
      console.log(file)
      fileList.push(file)
      console.log(fileList)
    },
    handleError(err, file, fileList) {
      console.log(err)
      console.log(file)
      console.log(fileList)
      axios.post('/api/upload', file)
        .then(res => {
          console.log(res)
        })
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
