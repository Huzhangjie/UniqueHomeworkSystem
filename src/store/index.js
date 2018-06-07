import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import moment from 'moment'


Vue.use(Vuex)

const state = {
  user: '',
  token: window.sessionStorage.getItem('token'),
  username: '',
  myMessages: []
}

const mutations = {
  LOGIN: (state, data) => {
    //更改token的值
    state.token = true
    // console.log(data)
    state.user = data
    axios.post('/api/getMessage', state.user).then(({data}) => {
      if(!data.data) return
      state.myMessages = data.data
      // 对收到的消息进行时间格式转换
      state.myMessages.forEach(item => {
        item.send_time = moment(item.send_time).format('YYYY-MM-DD HH:mm:ss')
      })

      //对收到的消息按时间进行排序
      state.myMessages.sort( (a, b) => {
        if(a.send_time < b.send_time) return 1
        if(a.send_time > b.send_time) return -1
        return 0
      })
    })
    window.sessionStorage.setItem('user', data)
    window.sessionStorage.setItem('token', true)
  },
  LOGOUT: (state) => {
    // 退出登录时清楚token
    state.token = null
    state.user = ''
    window.sessionStorage.removeItem('token')
    window.sessionStorage.removeItem('user')
  },
  USERNAME: (state, data) => {
    state.username = data
    window.sessionStorage.setItem('user', data)
  },
  USERUPDATE: (state, data) => {
    // console.log(data)
    let keysArr = Object.keys(data)
    let modifyInfo = {"login_name": data['login_name']}
    for(let i = 0, len = keysArr.length; i< len; i++) {
      // console.log(state.user[keysArr[i]] +' ==  ' + data[keysArr[i]])
      if(state.user[keysArr[i]] != data[keysArr[i]]) {
        // 找到 value不同的属性 存进 modifyInfo 传给后台处理
        modifyInfo[keysArr[i]] = data[keysArr[i]]
      }
    }
    // state.user = data
    axios.post('/api/updateInfo', modifyInfo).then( res => {
      console.log(res)
      if(res.data.success) {
        state.user = data
        window.sessionStorage.setItem('user', data)
      }
    })
  },
  UpdateAvatar: (state, data) => {
    state.user.avatar = data
    window.sessionStorage.setItem('user', state.user)
  }
}

const actions = {
  UserLogin({ commit }, data) {
    commit('LOGIN', data)
  },
  UserLogout({ commit }, data) {
    commit('LOGOUT', data)
  },
  // UserName({ commit }, data) {
  //   commit('USERNAME', data)
  // }
  UserUpdate({ commit }, data) {
    commit('USERUPDATE', data)
  },
  UserUpdateAvatar( {commit}, data) {
    commit('UpdateAvatar', data)
  }
}

const getters = {
  getUser: state => state.user,
  getMyMessage: state => state.myMessages,
  getLogin_name: state => state.user.login_name
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})