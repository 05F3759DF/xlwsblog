import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let router = require('./routes').default
router.start(require('./index.vue'), 'app')
