import { getAuth, signOut } from 'firebase/auth'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = ({setIsAuth}) => {

  const navigate = useNavigate();
  const auth = getAuth();

  const logout = () => {
    //ログアウト
    signOut(auth).then(() => {
      console.log("ログアウト実行")
      localStorage.clear();
      //setIsAuth(false);
      navigate("/login");
    });
  }

  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
}

export default Logout