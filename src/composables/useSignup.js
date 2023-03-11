import { ref } from 'vue'
// import { projectAuth } from '../firebase/config'

const error =  ref(null)

const signup  = async (displayName, email, password) =>{
    error.value = null

    try {
        // const res = await projectAuth.createUserWithEmailAndPassword(email, password)
        if (!res) {
            throw new Error('could not comple signing up')
        }
        console.log(res.user);
    } catch (err) {
        console.log(err.message);
        error.value = err.message
    }
}

const useSignup = () =>{
    return{ error, signup }
}

export default useSignup 
