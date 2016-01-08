import VueRouter from 'vue-router'

let router = new VueRouter({
  history: true,
})
router.map({
  '/': {
    component: require('./views/markdown.vue'),
  },
})
export default router
