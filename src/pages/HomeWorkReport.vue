<template>
  <!-- 做作业界面 -->
  <el-container>
    <el-header>
      <el-button type="text" icon="el-icon-arrow-left" style="font-size: 18px;">
        <router-link :to="{path: '/HomeWork'}">回到作业</router-link>
      </el-button>
    </el-header>
    <el-main>
      <div class="exercise-header">
        <div class="exercise-header__title">{{title}}</div>
        <div class="exercise-header__href">
        </div>
      </div>
      <div class="exercise-body">
        <div class="exercise-body__title">
          <span style="margin: 0 20px;">{{title}}：{{tag}}</span>
          <span style="color: #db2727;">{{state}}</span>
        </div>
        <div class="exercise-body__list" v-for="(item, index) in exerciseList" :key="index">
          <el-card class="box-card">
            <div slot="header" class="exercise-body__list__content">
              <span style="color: #409EFF; font-size: 20px; margin-right: 10px">{{index + 1}}</span>
              <span style="font-size: 18px">{{item.content}}</span>
            </div>
            <div class="exercise-body__list__options">
              <el-radio-group v-model="myAnswer[index]">
                <el-radio :label="item" v-for="(item, index) in exerciseList[index].options" :key="index">
                  <span style="padding-left: 10px;">{{opt[index]}}</span>
                  <span style="padding-left: 10px;">{{item}} </span> 
                </el-radio>
              </el-radio-group>
            </div>
          </el-card>
        </div>
      </div>
      <div class="exercise-footer">
        <!-- 提交作业 -->
        <el-button type="primary" style="margin-right: 20px; color: white;" @click="submit" >提交作业</el-button>
        
        <el-dialog title="提示" :visible.sync="outerVisible"  v-if="show">
          <span>您还有未做完的单选题，请做完再提交！</span>
          <span slot="footer" class="dialog-footer">
             <el-button type="primary" @click="outerVisible = false" style="color: white;">确 定</el-button> 
          </span>
        </el-dialog>

        <el-dialog :visible.sync="outerVisible" v-else>
          <span>是否提交？</span>          
          <el-dialog width="40%" title="提交成功" :visible.sync="innerVisible" append-to-body>
            <span slot="footer" class="dialog-footer">
             <el-button type="primary" @click="innerVisible = false" style="color: white;">确 定</el-button> 
          </span>
          </el-dialog>
          <div slot="footer" class="dialog-footer">
            <el-button @click="outerVisible = false">取 消</el-button>
            <el-button @click="innerVisible = true, outerVisible = false" type="primary" >
             <router-link :to="{path: '/HomeWorkReport'}" style="color: white;">确定</router-link> 
            </el-button>
          </div>
        </el-dialog>

        <!-- 保存作业 -->
        <el-button type="text" @click="dialogSaveVisible=true">暂时保存</el-button>

        <el-dialog title="提示" :visible.sync="dialogSaveVisible" >
          <span>保存成功</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogSaveVisible = false" type="primary" style="color: white;">确定</el-button>
          </span>
        </el-dialog>
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      title: '练习一',
      tag: '家庭作业',
      state: '已完成',
      sum: '0.0',
      myAnswer: [],
      show: true,
      innerVisible: false,
      outerVisible: false,
      dialogSaveVisible: false,
      opt: ['A', 'B', 'C', 'D'],
      exerciseList: [
        {
          content: "Unfortunately, when I dropped in, Doctor Li _____ for Beijing to join in the fight again SARS, so we only had time for a few words.",
          options: ['just left', 'has just left', 'is just leaving', 'was just leaving'],
          answer: 'was just leaving',
          score: '5'          
        },
        {
          content: "He hasn't come yet.What do you consider _______ to him?",
          options: ["happens", "has happened", "happening", "to happen"],
          answer: "has happened",
          score: '5'
        },
        {
          content: "______ is known to us all is that China has launched Shenzhou V spaceship successfully.",
          options: ["That", "What", "It", "As"],
          answer: "What",
          score: '5'
        },
        {
          content: "______ that the South African writer John Coetzee won the Nobel Prize in Literature for 2003.",
          options: ["They'er reported", "He's reported", "We'er reported", "It's reported"],
          answer: "It's reported",
          score: '5'
        },
        {
          content: "______ the Atlantic Ocean crosses the equator, the trade winds cause a flow of water to the west.",
          options: ["That", "When", "Where", "Though"],
          answer: "Where",
          score: '5'
        },
        {
          content: "The two old sisters,_______ so long,held each other and burst into tears.",
          options: ["being separated", "having been separated", "having separated", "had been separated"],
          answer: "having been separated",
          score: '5'
        },
        {
          content: "Never _______ forget the days when _______ together with you.",
          options: ["shall I;  I lived", "shall I;  did I live", "I shall;  I lived", "I shall;  did I live"],
          answer: "shall I;  I lived",
          score: '5'
        },
        {
          content: "Why didn't you tell me there was no meeting today? I _____ all the way here _____the heavy snow.",
          options: ["needn't have driven;  through", "can't have driven;  across", "mustn't have driven;  through", "shouldn't have driven; cross"],
          answer: "needn't have driven;  through",
          score: '5'
        },
        {
          content: "It was _____ great shock to the world that two airplanes crashed into _____ World Trade Centre in New York on Sept.11.",
          options: ["a;  /", "the;  the", "a;  the"],
          answer: "a;  the",
          score: '5'
        }
      ]
    } 
  },
  methods: {
    submit() {
      this.outerVisible = true;
      let len = this.exerciseList.length;
      if(this.myAnswer.length < len) {
        console.log("您还有未做完的单选题，请做完再提交！");
        this.show = true;
      }
      else {
        console.log("全部做完");
        this.show = false;
      }
      // console.log(this.myAnswer);

    }
  }
}
</script>
<style scoped>
.el-dialog {
  width: 40%;
  color: white;
}
.el-header {
  display: flex;
  align-items: center;
  margin: 0 40px;
  padding: 0;
  background-color: #eaeaea;  
}
.el-button {
  color: #333333;
}
.exercise-header {
  width: 100%;
  height: 100px;
}
.exercise-header__title {
  display: flex;
  justify-content: center;
  align-items: center;
  height:60px;
  font-size: 20px;
  font-weight: bold;
}
.exercise-header__href {
  width: 100%;
  height: 40px;
  background-color: #eaeaea;
  border: 1px solid #e1e1e1;
}
.el-main{
  margin: 0 40px;
  padding: 0;
}
.exercise-body {
  margin: 0 50px;
}
.exercise-body__title {
  width: 100%;
  height: 60px;
  margin-top: 40px;
  margin-bottom: 20px;
  border: 1px solid #cccccc;
  line-height: 60px;
  font-size: 18px;
}
.el-card__header {
  background: #f4f4f4;
}
.el-radio {
  width: 100%;
  margin-top: 10px;
  margin-left: 30px;
  color: #666666;
  font-size: 18px;
}
.exercise-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
}
</style>