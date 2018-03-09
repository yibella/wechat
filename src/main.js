// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import $ from 'jquery'
// import jqueryWeui from 'jquery-weui'
import 'jquery-weui/dist/lib/weui.min.css'
import 'jquery-weui/dist/css/jquery-weui.min.css'
import './assets/css/common.css'
import 'font-awesome/css/font-awesome.min.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
