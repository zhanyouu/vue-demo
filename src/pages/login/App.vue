<template>
	<div style="overflow: hidden;" @keyup.enter="login">
		<el-card class="login-card">
			<div slot="header">
				<img :src="logo" class="logo-img">
				<span class="logo-text">System</span>
			</div>
			<el-form class="login" label-width="100px">
				<el-form-item label="工号:">
					<el-input 
						placeholder="请输入工号"
						v-model="jobNumber"
						:maxlength="20">
					</el-input>
				</el-form-item>
				<el-form-item label="密码:">
					<el-input
						placeholder="请输入密码"
						v-model="password"
						type="password" >
					</el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="login">登录</el-button>
				</el-form-item>
			</el-form>
		</el-card>
	</div>
</template>

<script>
	import logo from './assets/img/logo.png'
	import axios from 'axios'
	import 'element-ui/lib/theme-chalk/index.css'
  export default {
    data () {
      return {
        logo: logo,
        jobNumber: '',
        password: ''
      }
		},
		methods:{
			login(){
				axios.post('/api/account/login',{jobNumber:this.jobNumber,password:this.password}).then((Response)=>{
					let res=Response.data;
					if(res.status==0){
						location.assign('/')
					}else{
						alert(res.msg);
					}
				})
			}
		}
  }
</script>

<style lang="scss">
	@import '../../assets/variable.scss';
  .login-card{
		display: flex;
    width: 800px;
    margin: 100px auto;
  }
  .login{
    display: block;
    width: 400px;
    margin: 100px auto;
  }
  .logo-img{
		width: 90px;
		vertical-align: top;
  }
  .logo-text{
		margin-left: 20px;
		line-height: 100px;
		font-weight: bold;
		font-size: 16px;
		color: $main_color;
  }
</style>
