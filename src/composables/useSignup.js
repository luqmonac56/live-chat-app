import { ref } from 'vue'

const error =  ref(null)

const signup  = async (displayName, email, password) =>{

}

const useSignup = () =>{
    return{ error, signup }
}

export default useSignup 