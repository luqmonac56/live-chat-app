import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import ChatRoom from '../views/ChatRoom.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/ChatRoom',
      name: 'ChatRoom',
      component: ChatRoom
    }
  ]
})

export default router
