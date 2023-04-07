import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue')
      },
      {
        path: '/info',
        name: 'Info',
        component: () => import('@/views/ImgView.vue')
      }
    ]
  },
  // {
  //   path:'/about',
  //   name:'About',
  //   component: () => import('@/views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
