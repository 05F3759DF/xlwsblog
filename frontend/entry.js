import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.debug = true
let router = require('./routes').default
Vue.prototype.$router = router
router.start(require('./index.vue'), 'app')
