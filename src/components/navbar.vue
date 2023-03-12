<template >
    <nav class="flex justify-between items-center p-5">
        <div class="">
            <p class=" text-[#444]  text-[16px]">Hey there ..... display name </p>
            <p class="text-[12px] text-[#999999]">Currently logged in as... email</p>
        </div>
        <button @click="handleLogout">Logout</button>

    </nav>
</template>

<script >
import useLogout from '../composables/useLogout';

export default {


    setup(props) {
        const {  error, logout } = useLogout()


        const handleLogout = async()=>{
            await logout()

            if (!error.value) {
                console.log('user successfully logged out');
                // console.log(error);
            }
        }

        return{handleLogout}
    }
}

</script>

<style  scoped>
nav p{
    margin: 2px auto;
}
</style>