import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/sample',
    component: () => import('@/layouts/SampleLayout'),
    children: [
      {
        path: '/sample',
        name: 'Sample',
        component: () => import('@/views/sample'),
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
