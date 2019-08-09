import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router =new Router({
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import("@/components/HelloWorld.vue"),
    }
  ]
})


router.beforeEach(async (to, from, next) => {

 console.log(to,from)
 next()
})
export default router