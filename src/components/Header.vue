<template>
	<div class="header">
		<!-- 折叠按钮 -->
		<div class="collapse-btn" @click="collapseChage">
			<i class="el-icon-menu"></i>
		</div>
		<div class="logo">个性化作业系统</div>
		<div class="header-right">
			<div class="header-user-con">
				<!-- 全屏显示 -->
				<div class="btn-fullscreen" @click="handleFullScreen">
					<el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
						<i class="el-icon-rank"></i>
					</el-tooltip>
				</div>
				<!-- 消息中心 -->
				<div class="btn-bell">
					<el-tooltip effect="dark" :content="myMessage.length?`有${myMessage.length}条未读消息`:`消息中心`" placement="bottom">
						<router-link to="/message">
							<i class="el-icon-bell"></i>
						</router-link>
					</el-tooltip>
					<span class="btn-bell-badge" v-if="myMessage.length"></span>
				</div>
				<!-- 用户头像 -->
				<div class="user-avator"><img :src="user.avatar"></div>
				<!-- 用户名下拉菜单 -->
				<el-dropdown class="user-name" trigger="click" @command="handleCommand">
					<span class="el-dropdown-link">
						{{user.login_name}} <i class="el-icon-caret-bottom"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item command="modifyInfo">修改信息</el-dropdown-item>
						<el-dropdown-item command="modifyPsw">修改密码</el-dropdown-item>
						<el-dropdown-item command="modifyAvatar">更换头像</el-dropdown-item>
						<el-dropdown-item divided  command="loginout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
		</div>
		<el-dialog title="修改信息" center :visible.sync="dialogModifyVisible">
			<el-form v-model="userInfo" >
				<el-form-item label="用户名" label-width="100px">
					<el-input disabled :placeholder="userInfo.login_name"></el-input>
				</el-form-item>
				<el-form-item label="姓名" label-width="100px">
					<el-input v-model="userInfo.name" :placeholder="userInfo.name"></el-input>
				</el-form-item>
				<el-form-item label="学校" label-width="100px">
					<el-input v-model="userInfo.school" :placeholder="userInfo.school" ></el-input>
				</el-form-item>
				<el-form-item label="手机" label-width="100px">
					<el-input v-model="userInfo.tel" :placeholder="userInfo.tel" ></el-input>
				</el-form-item>
				<el-form-item label="邮箱" label-width="100px">
					<el-input v-model="userInfo.email" :placeholder="userInfo.email" ></el-input>
				</el-form-item>
				<!-- <el-form-item label="上传头像"> -->
				<!-- <el-upload
					class="avatar-uploader" ref="upload"
					action="https://jsonplaceholder.typicode.com/posts/"
					list-type="picture-card"
					:on-success="handleSuccess"
					:on-error="handleError"
					:auto-upload="false">
					<i class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload> -->
				<!-- <form method="post" enctype="multipart/form-data">  
					<input type="file" name="file"/>  
					<input type="submit" value="ok"/> 
				</form>   -->
				<!-- </el-form-item> -->
				<el-form-item>
					<el-button type="primary" @click="saveInfo">保存</el-button>
					<el-button @click="dialogModifyVisible = false">取消</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
		<el-dialog title="修改密码" center :visible.sync="dialogModifyPsw">
			<el-form>
				<el-form-item label="旧密码" label-width="100px">
					<el-input v-model="password.oldPass" type="password" placeholder="请输入旧密码"></el-input>
				</el-form-item>
				<el-form-item label="新密码" label-width="100px">
					<el-input v-model="password.newPass" type="password" placeholder="请输入新密码"></el-input>
				</el-form-item>
				<el-form-item label="确认密码" label-width="100px">
					<el-input v-model="password.checkPass" type="password" placeholder="确认新密码"></el-input>
				</el-form-item>
				<el-form-item size="large">
					<el-button type="primary" @click="savePsw">保存</el-button>
					<el-button @click="dialogModifyPsw = false">取消</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
		<el-dialog title="更新头像" center :visible.sync="dialogModifyAvatar">
			<!-- <el-form> -->
				<!-- <el-form-item label="上传头像"> -->
					<!-- <el-upload ref="upload"
					action="http://127.0.0.1:8080/api/upload"
					list-type="picture-card"
					:auto-upload="false"
					:limit="1">
						<i class="el-icon-plus"></i>
					</el-upload>
					<el-button type="primary" @click="submitUpload">保存</el-button>
					<el-button>取消</el-button> -->
					<iframe name="message" style="display: none"></iframe>
					<form ref="avatarForm" :action="'/api/upload'" method="post" enctype="multipart/form-data" target="message">  
						<input type="file" name="file"/> 
						<input type="text" name="login_name" style="display: none" :value="user.login_name" />
						<input type="button" @click="updateAvatar" value="ok"/>  
        </form>
				<!-- </el-form-item> -->
			<!-- </el-form> -->
		</el-dialog>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import bus from './bus';
import axios from 'axios';
export default {
	// enctype="multipart/form-data"
	data() {
		return {
			password: {
				oldPass: '',
				newPass: '',
				checkPass: '',
			},
			userInfo: '',
			dialogModifyVisible: false,
			dialogModifyPsw: false,
			dialogModifyAvatar: false,
			form: {},
			collapse: false,
			fullscreen: false,
			name: 'admin',
			// message: myMessage.length
		}
	},
	computed:{
		...mapGetters({
			user: 'getUser',
			myMessage: 'getMyMessage'
		})
	},
	mounted() {
		// 深拷贝
		this.userInfo = JSON.parse(JSON.stringify(this.user))
	},
	methods:{
			// 用户名下拉菜单选择事件
		handleCommand(command) {
			if(command == 'loginout'){
				this.$store.dispatch('UserLogout')
				this.$router.push('/login');
			}
			if(command == 'modifyInfo') {
				this.dialogModifyVisible = true
			}
			if(command == 'modifyPsw') {
				this.dialogModifyPsw = true
			}
			if(command == 'modifyAvatar') {
				this.dialogModifyAvatar = true
			}
		},
		// 侧边栏折叠
		collapseChage(){
			this.collapse = !this.collapse;
			bus.$emit('collapse', this.collapse);
		},
		// 全屏事件
		handleFullScreen(){
			let element = document.documentElement;
			if (this.fullscreen) {
				if (document.exitFullscreen) {
					document.exitFullscreen();
				} else if (document.webkitCancelFullScreen) {
					document.webkitCancelFullScreen();
				} else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if (document.msExitFullscreen) {
					document.msExitFullscreen();
				}
			} else {
				if (element.requestFullscreen) {
					element.requestFullscreen();
				} else if (element.webkitRequestFullScreen) {
					element.webkitRequestFullScreen();
				} else if (element.mozRequestFullScreen) {
					element.mozRequestFullScreen();
				} else if (element.msRequestFullscreen) {
					// IE11
					element.msRequestFullscreen();
				}
			}
			this.fullscreen = !this.fullscreen;
		},
		saveInfo() {
			// axios.post('/api/upload', file)
			this.$store.dispatch('UserUpdate', this.userInfo)
			this.$message({
				type: 'success',
				message: '更新成功'
			})
			this.dialogModifyVisible = false
		},
		savePsw() {
			console.log(this.password)
			if(!this.password.oldPass && !this.password.newPass && !this.password.checkPass) {
				this.$message({
					type: 'error',
					message: '请输入完整'
				})
			}else if(this.password.newPass !== this.password.checkPass){
				this.$message({
					type: 'error',
					message: '新密码不一致'
				})
			}else if(this.password.newPass == this.password.oldPass){
				this.$message({
					type: 'error',
					message: '新旧密码相同'
				})
			} else {
				axios.post('/api/checkPass', {'login_name': this.user.login_name, 'pass': this.password.oldPass, 'newPass': this.password.newPass})
				.then(({data}) => {
					console.log(data)
					if(data.success == false && data.message == '密码错误') {
						this.$message({
							type: 'error',
							message: '密码错误'
						})
					} else if(data.success == true) {
						this.$message({
							type: 'success',
							message: '修改成功'
						})
						this.dialogModifyPsw = false		
					}
				}) 
			}
			// this.$store.dispatch('UpdatePass', this.userInfo)
			
		},
		submitUpload() {
			this.$refs.upload.submit()
		},
		async updateAvatar() {
			console.log(1)
			await this.$refs.avatarForm.submit()
			// axios.post('/api/upload', this.$refs.avatarForm).then(res => {
			// 	console.log(res)
			// })
			axios.post('/api/getAvatar', {"login_name": this.user.login_name}).then(({data}) => {
				console.log(data.avatar)
				this.$store.dispatch('UserUpdateAvatar', data.avatar)				
				this.$message({
					type: 'success',
					message: '更新成功'
				})
			})
			this.dialogModifyAvatar = false			
			console.log(2)
		}
	}
}
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        color: #fff;
    }
    .collapse-btn{
        float: left;
        padding: 0 21px;
        cursor: pointer;
        line-height: 70px;
    }
    .header .logo{
        float: left;
        width:250px;
        line-height: 70px;
    }
    .header-right{
        float: right;
        padding-right: 50px;
    }
    .header-user-con{
        display: flex;
        height: 70px;
        align-items: center;
    }
    .btn-fullscreen{
        transform: rotate(45deg);
        margin-right: 5px;
        font-size: 24px;
    }
    .btn-bell, .btn-fullscreen{
        position: relative;
        width: 30px;
        height: 30px;
        text-align: center;
        border-radius: 15px;
        cursor: pointer;
    }
    .btn-bell-badge{
        position: absolute;
        right: 0;
        top: -2px;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background: #f56c6c;
        color: #fff;
    }
    .btn-bell .el-icon-bell{
        color: #fff;
    }
    .user-name{
        margin-left: 10px;
    }
    .user-avator{
        margin-left: 20px;
    }
    .user-avator img{
        display: block;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-link{
        color: #fff;
        cursor: pointer;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
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
</style>
