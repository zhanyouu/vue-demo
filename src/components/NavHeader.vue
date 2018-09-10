<template>
  <div class='header'>
    <span class="title" @click="goIndex">
      电池研发流程数据统计系统
    </span>
    <span class="right" >
     <el-tooltip class="item" effect="dark" :content="username" placement="left" v-if="loginB">
				<div class="user-name-wrapper">
					<a href="javascript:;" target="_blank" class="user-name">
						{{username.slice(0,1)}}
					</a>
				</div>
			</el-tooltip>
			<el-button type="text" icon="el-icon-arrow-right" @click="login" v-if="!loginB">登录</el-button>
			<el-button type="text" icon="el-icon-arrow-right" @click="logout" v-if="loginB">退出</el-button>
    </span>
  </div>
</template>

<script>
  import axios from 'axios'
  export default{
    data(){
      return {
				username:'',
				loginB:false
      }
		},
		mounted(){
			this.checkLogin();
		},
    methods:{
			checkLogin(){
				axios.get('/api/account/checkLogin').then((Response)=>{
					let res=Response.data;
					if(res.status=='0'){
						this.username=res.result;
						this.loginB=true;
					}else{
						return;
					}
				})
			},
      goIndex(){
        location.assign('/')
			},
			login(){
				location.replace('/login.html')
			},
			logout(){
				axios.get('/api/account/logout').then((Response)=>{
					let res=Response.data;
					if(res.status=='0'){
						location.replace('/login.html')
					}
				})
			},
			handleExcelSuccess(res, file) {
        if(res.status==0){
          alert("sucess")
        }
			},
      beforeExcelUpload(file) {

      }
    }
  }
</script>
<style lang="scss" scoped>
@import '../assets/variable.scss';
@import 'element-ui/lib/theme-chalk/index.css';
.header{
  height: $header_height;
  padding: {
    left: 20px;
    right: 20px;
  }
  border: {
    bottom: 1px solid #ebeef5;
  }
  	background:
			linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
			linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
			linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
			linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
			linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
			linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);
		background-color: #131313;
		background-size: 20px 20px;
		.title{
			line-height: $header_height;
			font-size: 20px;
			color: white;
			cursor: pointer;
		}
		.right{
			float: right;
			margin: {
				top: 10px;
			}
			.user-name-wrapper{
				display: inline-block;
				width: 40px;
				height: 40px;
				padding: 4px;
        box-sizing: border-box;
				.user-name{
					display: inline-block;
					height: 32px;
					width: 32px;
					line-height: 32px;
					background: white;
					color: $main_color;
					font-size: 14px;
					// font-weight: bold;
					text-align: center;
					border-radius: 50%;
				}
			}
			.el-button--text{
				color: white;
			}
			.avatar-uploader{
				float: right;
				margin-left: 5px;
			}
		}
}
</style>

