<template>
  <div class="container">
    <ChatList /> 
    <SendMessage />
  </div>
</template>

<script>
import SendMessage from '@/components/SendMessage'
import ChatList from '@/components/ChatList'
export default {
  components: {
    SendMessage,
    ChatList
  }
}
</script>

<style scoped>
.wrapper {
  width: 750px;
  height: 500px;
}
.container {
  width: 600px;
  display: flex;
  height: 500px;
}
</style>
