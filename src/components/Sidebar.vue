<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
					text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
					<template v-for="item in items">
						<template v-if="item.subs">
							<el-submenu :index="item.index" :key="item.index">
								<template slot="title">
									<i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
								</template>
								<el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
									{{ subItem.title }}
								</el-menu-item>
							</el-submenu>
						</template>
						<template v-else>
							<el-menu-item :index="item.index" :key="item.index">
								<i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
							</el-menu-item>
						</template>
					</template>
        </el-menu>
    </div>
</template>

<script>
import bus from './bus';
export default {
	data() {
		return {
			collapse: false,
			items: [
				{
					icon: 'el-icon-setting',
					index: 'dashboard',
					title: '系统首页'
				},
				{
					icon: 'el-icon-tickets',
					index: 'homework',
					title: '我的作业'
				},
				{
					icon: 'el-icon-message',
					index: 'stuhomeworkreport',
					title: '我的作业报告'
				},
				{
					icon: 'el-icon-star-on',
					index: 'zhishidian',
					title: '知识点掌握情况'
				},
				{
					icon: 'el-icon-rank',
					index: 'discuss',
					title: '讨论区'
				},
				{
					icon: 'el-icon-tickets',
					index: 'self',
					title: '自主做题'
				},
				{
					icon: 'el-icon-sort',
					index: 'pk',
					title: 'PK答题'
				},
				{
					icon: 'el-icon-error',
					index: '404',
					title: '404页面'
				}
			]
		}
	},
	computed:{
		onRoutes(){
			return this.$route.path.replace('/','');
		}
	},
	created(){
		// 通过 Event Bus 进行组件间通信，来折叠侧边栏
		bus.$on('collapse', msg => {
				this.collapse = msg;
		})
	}
}
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
