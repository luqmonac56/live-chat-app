<template>
    <div>
        <form @submit.prevent="handleSubmit" >
            <input type="text" required placeholder="Display name" v-model="displayName">
            <input type="email" required placeholder="email" v-model="email">
            <input type="password" required placeholder="password" v-model="password">
            <div class="error">{{ error }}</div>
            <button>Sign up</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup'
export default {
    setup (props, context) {

        const { error, signup } = useSignup()

        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = async  () =>{
            await signup(displayName.value, email.value, password.value)
            // console.log(`${displayName.value} succesfully signed up`);

            if(!error.value){
                context.emit('signup')
            }
        }

        return {displayName, email, password, handleSubmit, error}
    }
}
</script>

<style scoped>

</style>