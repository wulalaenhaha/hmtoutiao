import Vue from 'vue'
import App from './App.vue'

import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(element)

Vue.config.productionTip = false

// 职责1：导入项目需要的资源（包，css）
// 职责2：初始化跟实例 new Vue() 选项，
// render是把某一个app组件渲染到指定的
// 容器内(.$mount('#app'))内
new Vue({
  render: h => h(App),
}).$mount('#app')
