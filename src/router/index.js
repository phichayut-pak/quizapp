import { createRouter, createWebHashHistory } from 'vue-router'
import QuizHome from '../views/QuizHome.vue'
// import Test from '../views/Test.vue'

const routes = [
  {
    path: '/',
    name: 'QuizHome',
    component: QuizHome
    // path: '/',
    // name: 'Test',
    // component: Test
  },
  {
    path: '/quizoperators',
    name: 'QuizOperators',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/QuizOperators.vue')
  },
  {
    path: '/quizchoices',
    name: 'QuizChoices',
    component:() => import('../views/QuizChoices.vue')
  },
  { path: '/notFound(.*)', redirect: '/' }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
