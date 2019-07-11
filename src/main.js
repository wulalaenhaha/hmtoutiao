import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

// 1.在默认索引文件夹下存在index.js index.vue index.json 默认加载这些文件
// 2.在使用vue-cli的时候 @符号在路径中作为前缀使用的时候 代表src目录 
import router from '@/router'

// 导入axios
import axios from 'axios'
// 作用：不用每次在组件中导入，挂载在原型上，会被继承
Vue.prototype.$http =axios

// 职责1：导入项目需要的资源（包，css）
// 职责2：初始化跟实例 new Vue() 选项，
// render是把某一个app组件渲染到指定的
// 容器内(.$mount('#app'))内
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
