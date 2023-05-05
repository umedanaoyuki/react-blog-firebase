import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../firebase'

const Login = () => {

  const loginWithGoogle = (setIsAuth) => {
    //Googleでログイン
    signInWithPopup(auth, provider).then((result) => {
      console.log("ログイン成功")
      console.log(result)
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
    });
  }

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginWithGoogle}>Googleでログイン</button>
    </div>
  );
}

export default Login