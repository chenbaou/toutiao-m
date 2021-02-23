import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//导入全局样式
import './styles/index.less'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
