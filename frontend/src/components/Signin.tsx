import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

export const Signin = () =>{
    const auth = getAuth();
    async function onSignin(){
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                if (!credential){
                    return;
                }
                const token = credential.accessToken;
                const user = result.user;
            }).catch((error) => {
                console.log(error)
        });
    }
    return <div>
        <button onClick ={()=>{
            onSignin()
        }} >
            Signup
        </button>
    </div>
}
