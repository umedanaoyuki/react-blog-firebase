import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../firebase'

const Login = () => {
  const loginWithGoogle = () => {

    signInWithPopup(auth, provider).then((result) => {
      


    }).catch

  }
}

const Login = () => {
  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginWithGoogle}>Googleでログイン</button>
    </div>
  );
}

export default Login