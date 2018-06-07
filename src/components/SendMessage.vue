<template>
  <div class="wrapper">
    <div>
      <div class="message receive">
        <div>
          <img src="../assets/avatar.png" alt="" class="avatar">
        </div>
        <p>这是我接收的内容这是我接收的内容这是内容我接收的是我接收的内容这是我接收的</p>
      </div>
    </div>
    <div>
      <div class="message send">
        <div>
          <img src="../assets/avatar.png" alt="" class="avatar">
        </div>
        <p>这是我发送出去的内容这是我发送出去的内容这的内容去的内容这是我发送出去的内容</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.wrapper {
  width: 70%;
  height: 500px;
  padding: 0 20px;
  background-color: #fff;
}
.message {
  display: flex;
  margin: 20px 0;
}
.message:after {
  content: '';
  width: 50px;
  height: 100%;
}
.message p {
  text-align: start;
  border-radius: 5px;
  padding: 5px;
  font-size: 12px;
}

.receive {
  flex-direction: row;
}
.receive p {
  background-color: #eeeeee;
}
.send {
  flex-direction: row-reverse;
}
.send p {
  background-color: #2683f5;
}

.avatar {
  flex-basis: 30px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>
