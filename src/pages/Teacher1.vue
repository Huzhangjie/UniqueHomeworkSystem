<template>
  <div class="wrapper">
        <div class="header" :user="user">
      <a class="icon" href="" style="position: absolute;right: 10%;">
        <p><img src="../assets/img/message.png" ></p>
        <p style="width:45px;position: absolute;left:-2px;top: 30px;">私信</p>
      </a>
      <a class="icon" href="" style="position: absolute;right: 15%;">
        <p><img src="../assets/img/notice.png" ></p>
        <p style="width:80px;position: absolute;left:-18px;top: 30px;">消息通知</p>
      </a>
      <div id="photo"  >
        <img src="../assets/img/null.png">
        <p>老师</p>
      </div>
      <div id="information">
        <p>我的编号：</p>
        <p>我的姓名：</p>
        <p>我的学校：</p>
        <p>我的班级：</p>
        <button  style=" position: absolute;bottom: -45px;left:0px;">编辑个人信息</button>
      </div>
    </div>
   
    <div id="modules_container" >
      <div class="module" v-for="(item, index) in modules" :key="index"
        :style="{'background-color': item.styleColor}"
        @click="choseModule(item)">
        {{item.module}}
      </div>
      <div class="clearFloat"></div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      modules: [
        {
          module: '发布作业',
          path: '/publishHomework',
          styleColor: '#DD5044'
        },
        {
          module: '批阅作业',
          path: '/publishHomework',
          styleColor: '#FFCE44'
        },
        {
          module: '查看作业报告',
          path: '/publishHomework',
          styleColor: '#4C8CF5'
        },
        {
          module: '讨论区',
          path: '/publishHomework',
          styleColor: '#1DA362'
        },
      ]
    }
  },
  methods: {
    choseModule(item) {
      this.$router.push(item.path)
    }
  }
}
</script>

<style scoped>
.wrapper {
  position: relative;
  margin: 0 150px;
  padding: 0px;
  background-image: url("../assets/img/2.jpg");    
  background-size: 100%;
}
.header {
  height: 300px;
}
#modules_container{
  background-color: rgba(255, 251, 240,0.5);
  width:70%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-left: auto;
  margin-right:auto;
}
.module{
  color:white;
  /* float: left; */
  font-size: 20px;
  line-height: 150px;
  width: 80%;
  height: 150px;
  margin: 20px 10%;
  border-radius: 5%;
  /* padding: 20px; */
  text-align: center;
  border:#ADADAD 1px solid;
}
.module:hover{
  -webkit-box-shadow:1px 1px 45px white inset;
  transform: scale(1.1);
  transition:1.2s; 
  text-shadow: 0 0 15px #fff;
}
.clearFloat {
  clear: both;
}
.icon{
  color: black;
}
.icon p img{
  width:30px;
}
#photo{
  position:absolute;
  left: 24%; 
  top:70px ;
  width: 160px;
  height: 160px;
  text-align: center ;
}
#photo img{
  border:grey 1px solid;
  width:100%;
  height: 100%;
}
#information{
  background-color:  rgba(255, 251, 240,0.5);
  padding-left:20px; 
  position:absolute;
  right:24%;
  top:70px ;
  width: 30%;
  height: 160px;
  border-radius:5px ;
  border:#6E9D3A 2px solid;
}
button{
  color:white;
  padding:5px;
  border-radius:5px ;
  background-color:#6E9D3A;
}
</style>
