import VueRouter from 'vue-router'

let router = new VueRouter()

router.map({
  '/': {
    component: require('./views/markdown.vue'),
  },
  '/ckeditor': {
    component: require('./views/richtext.vue'),
  },
  '/markdown': {
    component: require('./views/markdown.vue'),
  },
  '*': {
    component: require('./views/404.vue'),
  },
})

export default router
