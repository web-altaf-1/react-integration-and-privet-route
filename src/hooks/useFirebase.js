import { useState } from "react"

const useFirebase = () =>{
    const [user,setUser] = useState({});
    
    const signInWithGoogle =()=>{
        console.log('Sign in soon !! ');
    }

    return {user, signInWithGoogle };
}

export default useFirebase;