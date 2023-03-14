<template >
    <nav v-if="user" class="flex justify-between items-center p-5">
        <div class="">
            <p class=" text-[#444]  text-[16px]">Hey there {{ user.displayName }} </p>
            <p class="text-[12px] text-[#999999]">Currently logged in as {{ user.email }}</p>
        </div>
        <button @click="handleLogout">Logout</button>

    </nav>
</template>

<script >
import useLogout from '../composables/useLogout';
import getUser from '../composables/getUser'

export default {

    setup(props) {
        const {  error, logout } = useLogout()
        const { user } = getUser()

        const handleLogout = async()=>{
            await logout()

            if (!error.value) {
                console.log('user successfully logged out');
                // console.log(error);
            }
        }

        return{handleLogout, user}
    }
}

</script>

<style  scoped>
nav p{
    margin: 2px auto;
}
</style>