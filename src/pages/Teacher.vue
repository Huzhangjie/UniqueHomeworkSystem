<template>
  <div class="wrapper">
    <div class="teacher_info">
      <div>
        <img class="teacher_avatar" src="../assets/avatar.png" alt="">
      </div>
      <div>
        <div>胡老师</div>
        <div>1980年05月</div>
        <div>XXXX大学特级教师。2018年荣获XX市一级教师。在校期间曾获多次三好教师的称号</div>
      </div>
    </div>
    <hr />
    <div class="answer">
      <Answer />
    </div>
  </div>
</template>

<script>
import Answer from '@/pages/Answer.vue'
export default {
  components: {
    Answer
  }
}
</script>

<style scoped>
.wrapper {
  width: 900px;
  margin: 0 auto;
  background-color: aquamarine;
}
.teacher_info {
  display: flex;
  height: 200px;
  padding: 50px;
}
.teacher_avatar {
  width: 100px;
  margin-right: 50px;
}
.answer {
  padding: 50px;
}
</style>
