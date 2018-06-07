<template>
  <div class="wrapper">
    <div class="title">
      <i class="iconfont icon-i-back"></i>
      <h1>发布作业</h1>
    </div>
    <hr />
    <div class="content">
      <div>标题: <input /></div>
      <div>选择班级： 
        <select name="selectClass" id="">
          <option value="B01">B01</option>
          <option value="B02">B02</option>
        </select> 
      </div>
      <div>截止日期：<input type="date" /></div>
      <div>作业内容：
      </div>
    </div>
    <div class="button_container">
      <button>发布作业</button>
      <button>保存</button>
    </div>  
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrapper {
  margin: 0 100px; 
  background-color: aquamarine;
}
.title {
  height: 100px;
  display: flex;
  align-items: center;
}
h1 {
  flex: 1;
}
.iconfont {
  font-size: 24px;
}
h1 {
  text-align: center;
}
.content {
  padding: 50px;
}
.button_container {
  display: flex;
  justify-content: space-around;
}
</style>
