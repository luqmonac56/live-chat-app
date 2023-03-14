import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import ChatRoom from '../views/ChatRoom.vue'
import { projectAuth } from '../firebase/config';

// auth guard
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  console.log('the current user in auth guard is:  ', user);
  if(!user){
    next({ name: 'welcome' })
  }
  else{
   next() 
  }
  
}

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
      component: ChatRoom,
      beforeEnter: requireAuth
    }
  ]
})

export default router
