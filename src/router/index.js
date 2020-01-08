import Vue from 'vue'
import VueRouter from 'vue-router'
import MyComponent from '../views/MyComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MyComponent',
    component: MyComponent
  }
]

const router = new VueRouter({
  routes
})

export default router
