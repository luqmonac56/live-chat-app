<template>
    <form class="w-full px-4">
        <textarea 
        class="w-full"
        @keypress.enter.prevent="handleSendMessage"
        v-model="message"
        placeholder="Type a message and hit enter to send..." ></textarea>
    </form>
</template>

<script>
import { ref } from 'vue'
import getUser from '../composables/getUser'
import { timeStamp } from '../firebase/config'
export default {
    setup () {
        const message = ref('')
        const { user } = getUser()

        const handleSendMessage = async ()=>{
            const chat = {
                message: message.value,
                user: user.value.displayName,
                createdAT: timeStamp()
            }

            console.log(chat);
            message.value = ''

        }

        return { message, handleSendMessage }
    }
}
</script>

<style scoped>
textarea{
    outline: none;
    border: none;
}

</style>