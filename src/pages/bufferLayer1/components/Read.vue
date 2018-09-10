<template>
<div>
  <el-table
    :data="tableData"
    border
    style="width: 100%; height:460px">
    <el-table-column
      fixed
      prop="name"
      label="姓名"
      width="150">
    </el-table-column>
    <el-table-column
      prop="age"
      label="年龄"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="post"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog
  title="图片"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <div class="img-container" @click="innerVisible=true" title="点击查看大图">
    <img :src="imgUrl" alt="" width="400px" height="400px">
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    <el-dialog
      :visible.sync="innerVisible"
      fullscreen
      append-to-body>
      <img :src="imgUrl" class="inner-image">
    </el-dialog>
  </el-dialog>
  <div class="block">
    <span class="demonstration">完整功能</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[7, 10, 12, 15]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="numberTotal">
    </el-pagination>
  </div>
</div>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        tableData:[],
        resData:[],
        numberTotal:0,
        pageSize:7,
        currentPage:1,
        imgUrl:'',
        dialogVisible:false,
        innerVisible:false
      }
    },
    mounted(){
      this.dataList();
    },
    methods:{
      handleClick(row) {
        this.dialogVisible=true;
        axios.post('/api/bufferLayer1/readPicture',{id:row.id}).then((Response)=>{
          let res=Response.data;
          if(res.status=='0'){
            let picName=res.result;
            // var a1=aa.split('.')[0];
            // var a2=aa.split('-')[1].slice(0,7);
            // var a3=a1+'.'+a2+'.'+'jpg';
            this.imgUrl=require("./../../../../attachment/BufferLayer1/"+picName);
          }else{
            alert('发生错误')
          }
        })
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      dataList(){
        axios.get('/api/bufferLayer1/read').then((Response)=>{
          let res=Response.data;
          this.resData=res.result;
          this.tableData=this.resData;
          this.numberTotal=this.tableData.length;
        })
      },
      handleSizeChange(val) {
       this.pageSize=val;
       this.currentPage=1;
      },
      handleCurrentChange(val) {
        this.tableData=this.resData;
        this.currentPage=val
        var data=[];
        for(var i=(val-1)*this.pageSize;i<val*this.pageSize;i++){
          if(i<this.numberTotal){
            data.push(this.tableData[i]);
          }
        }
        this.tableData=data;
      }
    }
  }
</script>

<style lang="scss">
	body{
		.el-dialog__wrapper{
			.el-dialog__body{
				overflow: auto;
				.inner-image{
					display: table-cell;
					margin: 0 auto;
				}
			}
		}
	}
</style>