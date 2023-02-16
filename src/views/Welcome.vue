<template>
    <div class=" welcome  text-center container py-5">
        <p class="text-3xl font-bold">Welcome</p>
        <div v-if="showLoginForm">
            <h2 class=" text-2xl ">Log in</h2>
            <Login/>
            <p>No account yet? <span @click="showLoginForm = !showLoginForm"> Sign up</span> then.</p>
        </div>
        <div v-else>
            <h2 class=" text-2xl ">Sign Up</h2>
            <SignUp/>
            <p>Have an account already? <span @click="showLoginForm = !showLoginForm"> Log in</span> then.</p>
        </div>
    </div>
</template>

<script>
import Login from '../components/Login.vue';
import SignUp from '../components/SignUp.vue';
import { ref } from 'vue'

export default {
    setup() {
        const showLoginForm = ref(true)
        return {showLoginForm};
    },
    components: { SignUp, Login }
}
</script>

<style >

.welcome form{
    width: 300px;
    margin: 20px auto;
}

.welcome label{
    display: block;
    margin: 20px 0 10px;
}

.welcome input{
    width: 100%;
    padding: 10px;
    border-radius: 20px ;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
}

.welcome span {
    color:#5ae4ca;
    cursor: pointer;
    font-weight: bold;
    text-decoration: underline;
}

.welcome button{
    margin: 20px auto;
}

</style>