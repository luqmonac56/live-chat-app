<template>
    <div>
        <div class="container">
            <Navbar/>
            <ChatWindow/>
            <NewChatForm/>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/navbar.vue';
import NewChatForm from '../components/NewChatForm.vue';
import getUser from '../composables/getUser';
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import ChatWindow from '../components/chatWindow.vue';


export default {
    setup(props) {
        const { user } = getUser()
        const router = useRouter()

        watch(user, () =>{
            if (!user.value) {
                router.push({ name: 'Welcome' })
            }
        })



    },
    components: { Navbar, NewChatForm, ChatWindow }
}

</script>

<style lang="scss" scoped>

</style>