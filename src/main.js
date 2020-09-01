import 'amfe-flexible/index.js'
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// import VConsole from 'vconsole';
import './styles/index.scss'
Vue.config.productionTip = false

// import { isNeedConsole } from '../config';
import 'vant/lib/index.css' // Vant 样式
// 开启调试器
// if (isNeedConsole) {
//     var vConsole = new VConsole();
// }

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
