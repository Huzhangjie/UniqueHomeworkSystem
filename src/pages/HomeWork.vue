<template>
  <!-- 批阅作业首页 -->
  <div>
    <div class="header">
        <a>
          <button class="header_button">返回主页</button>
        </a>
    </div>
    <div class="wrapper">
      <div class="wrapper_title">
        <p>作业</p>
        <hr />
      </div>
      <div class="wrapper_body">
        <ul class="wrapper_body__list">
          <li class="lookLi">
            <div class="titTxt">
              <p> 
                <a href="#" onclick="" title="界面设计" class="titTxt_title">界面设计</a>
              </p>
              <span title="" class="pt5"><span class="fl">开始时间：</span>2018-03-30 15:11</span>
              <span title="" class="pt5"><span class="fl">截止时间：</span>2018-04-03 22:11</span>
              <span title="" class="pt5"><span class="fl">作业状态：</span><strong>未完成</strong></span>	
            </div>
            <div class="titOper">
              <a class="titOper_btn" @click="toDoing">
                <span>做作业</span>
              </a>												
            </div>
          </li>
          <li class="lookLi">
            <div class="titTxt">
              <p> 
                <a href="#" onclick="" title="界面设计" class="titTxt_title">界面设计</a>
              </p>
              <span title="" class="pt5"><span class="fl">开始时间：</span>2018-03-30 15:11</span>
              <span title="" class="pt5"><span class="fl">截止时间：</span>2018-04-03 22:11</span>
              <span title="" class="pt5"><span class="fl">作业状态：</span><strong>未完成</strong></span>	
            </div>
            <div class="titOper">
              <a class="titOper_btn" @click="toDoing">
                <span>做作业</span>
              </a>												
            </div>
          </li>
          <li class="lookLi">
            <div class="titTxt">
              <p> 
                <a href="#" onclick="" title="界面设计" class="titTxt_title">界面设计</a>
              </p>
              <span title="" class="pt5"><span class="fl">开始时间：</span>2018-03-30 15:11</span>
              <span title="" class="pt5"><span class="fl">截止时间：</span>2018-04-03 22:11</span>
              <span title="" class="pt5"><span class="fl">作业状态：</span><strong>未完成</strong></span>	
            </div>
            <div class="titOper">
              <a class="titOper_btn" @click="toDoing">
                <span>做作业</span>
              </a>												
            </div>
          </li>
          <li class="lookLi">
            <div class="titTxt">
              <p> 
                <a href="#" onclick="" title="界面设计" class="titTxt_title">界面设计</a>
              </p>
              <span title="" class="pt5"><span class="fl">开始时间：</span>2018-03-30 15:11</span>
              <span title="" class="pt5"><span class="fl">截止时间：</span>2018-04-03 22:11</span>
              <span title="" class="pt5"><span class="fl">作业状态：</span><strong>未完成</strong></span>	
            </div>
            <div class="titOper">
              <el-button type="primary" class="titOper_btn" @click="toDoing">
                <span>做作业</span>
              </el-button>												
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    toDoing() {
      this.$router.push('/homeworkdoing')
    }
  }
}
</script>
<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .header {
    width: 100%;
    height: 70px;
  }
  .header_button {
    width: 70px;
    height: 30px;
    margin: 15px;
    border-radius: 5px;
    background-color: white;
    color: black;
  }
  .header_button:hover {
    color: white;
    background-color: #8da942;
    /* -webkit-box-shadow:2px 2px 60px #3E7D3E inset;
    box-shadow: 2px 2px 60px #3E7D3E inset;
    text-shadow: 0 0 15px #fff; */
  }
  .wrapper {
    width: 100%;
    height: 100%;
  }
  .wrapper_title p {
    text-align: center;
    color: black;
    margin: 15px;
  }
  .wrapper_body {
    margin: 0 auto;
    width: 94%;
    height: 1000px;
  }
  .wrapper_body ul {
    list-style: none;
    margin-top: 50px;
  }
  .wrapper_body__list li{
    float: left;
    position: relative;
    width: 350px;
    height: 190px;
    margin: 20px;
    border: 1px solid #e1e1e1;
  }
  .titTxt {
    float: left;
    padding: 10px;
    height: 120px;
  }
  .titTxt p {
    width: 100%;
    height: 35px;
    font-weight: bold;
  }
  .titTxt_title {
    text-decoration: none;
    color: #333333;
  }
  .pt5, .f1{
    width: 100%;
    float: left;
    height: 30px;
    font-size: 13px;
    color: #424242;
  }
  .titOper {
    display: block;
    /* float: left; */
    position: absolute;
    bottom: 0;
    width: 348px;
    height: 50px;
    border: 1px solid  #cccccc;
    background-color: #e8eeda;
  }
  .titOper_btn {
    float: right;
    margin: 10px;
    width: 55px;
    height: 30px;
    line-height:30px;
    /* background: #8da942;  */
    border-radius: 5px;
    text-align: center;
    color: white;
    font-size: 14px;
    text-decoration: none;
  }
</style>
