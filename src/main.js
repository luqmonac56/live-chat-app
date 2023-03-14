import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/style.css'
import './assets/main.css'

import { projectAuth } from './firebase/config'


let app

projectAuth.onAuthStateChanged(() =>{
    if (!app) {
        app = createApp(App)
        app.use(createPinia())
        app.use(router)
        app.mount('#app')
    }
})



// const app = createApp(App)
//         app.use(createPinia())
//         app.use(router)
//         app.mount('#app')