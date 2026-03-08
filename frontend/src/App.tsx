import { initializeApp } from "firebase/app";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { Signin } from "./components/Signin";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCmSa22YQkFMIPMIFG1ThRMtBGlkZENAns",
  authDomain: "leetcode-594f5.firebaseapp.com",
  projectId: "leetcode-594f5",
  storageBucket: "leetcode-594f5.firebasestorage.app",
  messagingSenderId: "304198453108",
  appId: "1:304198453108:web:738cc9d2276c1334fcce21",
  measurementId: "G-KV546751SV"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

function App() {
    useEffect(()=>{
        onAuthStateChanged(auth,function(user) {
            if (user) {
                console.log('This is the user: ', user)
            } else {
                // No user is signed in.
                console.log('There is no logged in user');
            }
        });
    })
  return (
    <div>
      <Signin />
    </div>
  );
}

export default App;
