import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
 

Vue.use(ElementUI, {size: 'small'});

Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
  
// })
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})