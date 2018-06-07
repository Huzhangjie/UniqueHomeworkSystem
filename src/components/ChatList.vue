<template>
  <div class="chatList">
    <!-- <div class="chatItem" :class="{'active': isActive}" @click="changeFirst">
      <div>
        <img src="../assets/avatar.png" alt="" class="avatar">
      </div>
      <div class="chatItem__title">
        <div class="name">小明</div>
        <div class="content">I have a queaaaaa</div>
      </div>
    </div> -->
    <!-- <div class="chatItem" @click="changeFirst">
      <div>
        <img src="../assets/baobao.jpg" alt="" class="avatar">
      </div>
      <div class="chatItem__title">
        <div class="name">宝宝</div>
        <div class="content">I just want to say</div>
      </div>
    </div> -->
    <div v-for="(chatItem, index) in chatList" :key="index" 
      class="chatItem" :class="{'active': activeIndex == index}"  @click="changeCurrent(index)">
      <div>
        <img :src="chatItem.src" alt="" class="avatar">
      </div>
      <div class="chatItem__title">
        <div class="name">{{chatItem.name}}</div>
        <div class="content">{{chatItem.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chatList: [
        {
          name: '小明',
          src: './static/avatar.png',
          content: 'I have a question'
        },
        {
          name: '宝宝',
          src: './static/baoer.jpg',
          content: 'I just want to say'
        },
      ],
      activeIndex: false
    }
  },
  methods: {
    changeCurrent(index) {
      this.activeIndex = index
    }
  }
}
</script>

<style scoped>
.chatList {
  flex: 1;
  width: 25%;
  height: 100%;
  padding: 5px;
  background-color: #999999;
  
}
.chatItem {
  display: flex;
  flex-direction: row;
  height: 50px;
  background-color: #fff;
  align-items: center;
}
.active {
  background-color: #eeeeee;
}
.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.chatItem__title {
  flex: 1;
  overflow: hidden;
}
.name {
  text-align: start;
}
.content {
  text-align: start;
  font-size: 12px;
  white-space: nowrap;
}
</style>
