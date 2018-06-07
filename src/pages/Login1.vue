<template>
	<div class="wrapper">
		<div id="bg" style="position: absolute; z-index: -1;width: 100%;height: 100%;">
			<img src="../assets/img/bpage.jpg" height="100%" width="100%" style="">
		</div>
		
		<div id="content">
				
			<div id="h1">和你一起快乐做作业</div>
			<div id="login" @click="showLogin">
				<a class="a globalLoginBtn">登录</a>
			</div>

			<div id="register"  @click="showRegister">
				<a>注册</a>
			</div>

			<div class="modal" :class="{showLogin: displayLogin ?'fade': 'show'}" id="loginModal" :style="{display: displayLogin ? 'block': 'none'}">
			<div style="display:table; width:100%; height:100%;">
			<div style="vertical-align:middle; display:table-cell;">
				<div class="modal-dialog modal-sm" style="width:540px;">
					<div class="modal-content" style="border:none;">
						<div class="col-left" style="background-image: url(./static/sprite_0.png)"></div>
						<div class="col-right">
							<div class="modal-header">
								<button type="button" id="login_close" class="close" data-dismiss="modal">
									<span aria-hidden="true" @click="hideModal">×</span>
									<span class="sr-only">Close</span>
								</button>
								<h4 class="modal-title" id="loginModalLabel" style="font-size: 18px;">登录</h4>
							</div>
							<div class="modal-body">
								<section class="box-login v5-input-txt" id="box-login">
									<form id="login_form" @keyup.enter="submitForm('loginForm')" :model="loginForm" ref="loginForm" autocomplete="off">
										<ul>
											<li class="form-group">
												<input class="form-control" id="id_account_l" maxlength="50" 
													placeholder="请输入用户名/手机号"
													v-model="loginForm.name"	required type="text">
											</li>
											<li class="form-group">
												<input class="form-control" required id="id_password_l" placeholder="请输入密码"
													v-model="loginForm.pass" type="password">
											</li>
										</ul>
									</form>
									<p class="good-tips marginB10">
										<a id="btnForgetpsw" class="fr">忘记密码？</a>还没有账号？
										<a href="" id="btnRegister" @click="this.displayRegister=true">立即注册</a>
									</p>
									<div class="login-box marginB10">
										<button @click="submitForm('loginForm')" id="login_btn" type="button" class="btn btn-micv5 btn-block globalLogin">登录</button>
										<div id="login-form-tips" class="tips-error bg-danger" style="display: none;">错误提示</div>
									</div>


									<div class="threeLogin">
										<span>其他方式登录</span>
										<a class="nqq" href="javascript:;"></a>
										<a class="nwx" href="javascript:;"></a>
										<!--<a class="nwb"></a>-->
									</div>

								</section>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
			</div>


			<div id="alert" :style="{display: displayRegister ? 'block': 'none'}">
				<div class="model-head">
					<span class="close" @click="hideModal">&times;</span>
					<h4 class="modal-title">注册页面</h4>
				</div>
				<div class="model-register" >
					<div class="main">
						<div class="row" ref="registerForm">
							<div class="col-md-12">
								<div class="flow">
									<!-- <div class="flowListBox"> </div> -->
									<div class="flowListBox">
										<div class="flowList" :class="{'for-cur':  registerForm.currIndex == 1,'beforeCur':  registerForm.currIndex > 1}">
											<em>1</em><br><strong>第1步</strong>
										</div>
										<div class="flowList" :class="{'for-cur':  registerForm.currIndex == 2,'beforeCur':  registerForm.currIndex > 2} ">
											<em>2</em><br><strong>第2步</strong>
										</div>
										<div class="flowList" :class="{'for-cur':  registerForm.currIndex == 3,'beforeCur':  registerForm.currIndex > 3}">
											<em>3</em><br><strong>第3步</strong>
										</div>
										<div class="flowList" :class="{'for-cur':  registerForm.currIndex == 4}">
											<em>4</em><br><strong>第4步</strong>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-12" id="flowDiv">
								<ol id="iList">
									<div id="contA" v-show="  registerForm.currIndex == 1">
										选择身份<br>
										<!-- <br>aaaaaaaaa -->
										<form>
											<br>
											<input type="radio" value="0" v-model=" registerForm.role">
											<label for="0">我是学生</label>	
											<input type="radio" value="1" v-model=" registerForm.role" style="margin-left: 20px">
											<label for="1">我是老师</label>	
										</form>
									</div>
									<div v-show=" registerForm.currIndex == 2" id="contB">验证手机号
										<br><br>&nbsp;&nbsp; 
										<input type="text" placeholder="请正确输入手机号" id="phone" v-model=" registerForm.tel"/>&nbsp;&nbsp;
										<input type="button" value="接收验证码" id="gnum">    
									</div>
									<div class="registerList" v-show=" registerForm.currIndex == 3" id="contC">设置用户名和密码
										<br>&nbsp;&nbsp; 
										<h5>用户名：&nbsp;<input type="text" placeholder="请输入用户名" v-model=" registerForm.login_name"> </h5><br/>
										<h5>真实姓名：&nbsp;<input type="text" placeholder="请输入真实姓名" v-model=" registerForm.name"> </h5><br/>
										<h5>密码：&nbsp;<input type="password" placeholder="仅限英文字母和数字" v-model=" registerForm.pass"></h5><br/>
										<h5>确认密码：&nbsp;<input type="password" placeholder="确认密码" v-model=" registerForm.checkPass"></h5><br/>										
									</div>
									<div v-show=" registerForm.currIndex == 4" id="contD">
										<br>完成注册流程，是否提交？
									</div>
								</ol>
							</div>
						</div>
					</div>
				</div>

				<div class="foot-btn">
					<button type="button" v-show=" registerForm.currIndex != 1" class="btn btn-primary" @click="preStep">上一步</button>
					<button type="button" @click="submitRegister('registerForm')" class="btn btn-default" :style="{float: 'right', display:  registerForm.currIndex == 4 ? 'block' : 'none'}">提交</button>
					<button type="button" v-show=" registerForm.currIndex != 4" class="btn btn-success" style="float:right; margin-right:10px;" :disabled="isCurrFormNull()" @click="nextStep">下一步</button>
				</div>
			</div>
			
		</div>
		<div id="mask" :style="{display: displayMask ? 'block': 'none'}"></div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	data() {
		return {
			loginForm: {
				name: '',
				pass: ''
			},
			registerForm: {
				currIndex: 1,				
				role: '0',
				type: null,
				tel: '',
				login_name: '',
				name: '',
				pass: '',
				avatar: '/static/avatar.jpg',// 默认头像
				checkPass: ''
			},
			displayMask: false, //控制mask 的显示
			displayLogin: false, // 控制显示 login 和modal
			displayRegister: false, // 控制显示 register 的modal
		}
	},
	methods: {
		showLogin() {
			this.displayMask = !this.displayMask
			this.displayLogin = !this.displayLogin
		},
		showRegister() {
			this.displayMask = !this.displayMask
			this.displayRegister = !this.displayRegister
		},
		hideModal() {
			this.displayMask = false,
			this.displayLogin = false,
			this.displayRegister = false
		},
		submitForm(formName) {
			try{
				axios.post('/api/login', this.loginForm)
				.then(({data}) => {
					// 账号不存在
					if (!data.success) {
						// console.log('账号或密码错误')
						this.$message({
							type: 'error',
							message: '账号或密码错误'
						});
						return;
					}
					if(data.success) {
						this.$message({
							type: 'success',
							message: '登录成功'
						})
					}
					// console.log(data)
					// 存入store 状态管理机中
					let token = true
					let username = data.user.login_name
					// console.log(username)
					this.$store.dispatch('UserLogin', data.user)
					// this.$store.dispatch('UserName', username)
					// 跳到目标页
					this.$router.push('/dashboard')
				})
			} catch (error) {
				console.log(error)
			}
		},
		submitRegister(formName) {
			try{
				axios.post('/api/register', this.registerForm)
				.then(({data}) => {
					if(data.success){
						this.$message({
							type: 'success',
							message: '注册成功 请登录'
						})
						this.displayRegister = false
						this.displayLogin = true
						this.loginForm.name = this.registerForm.login_name
					}else {
						this.$message({
							type: 'error',
							message: '用户名已存在'
						})
					}
				})
			}catch (error){
				console.error(error)
			}
		},
		isCurrFormNull() {
			// 根据注册表单的内容来决定'下一步'的按钮是否为可点击
			// console.log(this.registerForm.currIndex)
			switch(this.registerForm.currIndex){
				case 1:
					// console.log(this.registerForm.role + '111')
					if(this.registerForm.role === '') 
						return true
						break
				case 2: 
					if(this.registerForm.tel === '') 
						return true
					break
				case 3:
					console.log(!(this.registerForm.login_name && this.registerForm.pass && this.registerForm.checkPass && this.registerForm.name))
					if(!(this.registerForm.login_name && this.registerForm.pass && this.registerForm.checkPass && this.registerForm.name))
						return true
					break					
				default:
					return false
			}
		},
		numIsTel(num) {
			console.log(num)
			if(num){
				console.log(1)
				let reg = /^1[0-9]{10}$/
				return reg.test(num)
			}
		},
		preStep() {
			if(this.registerForm.currIndex > 1) {
				this.registerForm.currIndex--
			}
		},
		nextStep() {
			if(this.registerForm.currIndex == 2 && !this.numIsTel(this.registerForm.tel)) {
				this.$message({
					type: 'error',
					message: '手机号格式有误'
				})
				return
			}
			if(this.registerForm.pass != this.registerForm.checkPass) {
				this.$message({
					type: 'error',
					message: '两次输入密码不同'
				})
				return
			}
			if(this.registerForm.currIndex < 4) {
				this.registerForm.currIndex++
			}
		}
	}
}
</script>

<style>
@import '../assets/css/bootstrap.min.css';
@import '../assets/css/index.css';
@import '../assets/css/flow.css';
.wrapper {
	overflow: hidden;
}
#h1 {
	height: 50px;
	width: 300px;
	font-size: 30px;
	position: relative;
	text-align: center;
	color: darkkhaki;
	float: left;
}

#content {
	/* margin: 320px 50px 0; */
	/* height: 100%; */
	position: absolute;
	bottom: 0;
	left: 50px;
}

#login {
	font-family: Arial, Helvetica, sans-serif;
	background-color: #AAC5EE;
	font-size: 15px;
	border-radius: 20px;
	width: 100px;
	height: 50px;
	text-align: center;
	margin: 120px -300px 0;
	line-height: 45px;
	position: relative;
	float: left;
}

#register {
	font-family: Arial, Helvetica, sans-serif;
	background-color: #AAC5EE;
	font-size: 15px;
	border-radius: 20px;
	width: 100px;
	height: 50px;
	text-align: center;
	margin: 120px -50px;
	line-height: 45px;
	position: relative;
	float: left;
}

a {
	color: darkgoldenrod;
	text-decoration: none;
}

a:hover {
	color: bisque;
	text-decoration: underline;
}

#alert {
	border: 1px solid rgba(0, 0, 0, .2);
	width: 600px;
	height: 400px;
	border-radius: 6px;
	box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
	background: #fff;
	z-index: 999;
	position: fixed;
	left: 50%;
	top: 50%;
	margin: -180px -300px;
	opacity: .9;
	filter: alpha(opacity=90);
	display: none;
}

#mask {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background: #000;
	opacity: 0.5;
	display: none;
	z-index: 1;
}


.model-head {
	padding: 15px;
	color: #73879C;
	border-bottom: 1px solid #e5e5e5;
}

.registerList {
	height: 120px;
	overflow: auto;
}
.close {
	padding: 0;
	cursor: pointer;
	background: 0 0;
	border: 0;
	float: right;
	font-size: 14px !important;
	font-weight: 700;
	text-shadow: 0 1px 0 #fff;
	opacity: 0.4;
	margin-top: 5px;
}

#close:hover {
	cursor: pointer;
	color: #000;
}
.model-register {
	position: relative;
	padding: 15px;
}

.model-foot {
	padding: 15px;
	text-align: right;
}
#phone{
	width:200px ;
	height: 40px;
	border-radius: 10px;
	border:1px solid cornflowerblue;
	background-color: transparent;
	transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}
#gnum{
	width: 80px;
	height: 40px;
	background: steelblue;
	border-radius: 10px;
	color: white;
	font-size: 12px;
	/* cursor: pointer; */
}

</style>
