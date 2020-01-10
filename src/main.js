// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'
import app from './App.vue'
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
import './assets/lib/css/mui.min.css'

Vue.use(MintUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: c => c(app)
  // components: { App },
  // template: '<App/>'
})
