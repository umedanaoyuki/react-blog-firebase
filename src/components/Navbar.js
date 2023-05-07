import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faPen, faRightToBracket } from '@fortawesome/free-solid-svg-icons'


const Navbar = ({isAuth}) => {
  return (
    <nav>
        <Link to="/">
            <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
            ホーム
        </Link>

        {!isAuth ? (<Link to="/login">
          <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon>ログイン</Link>          
          ) : (
        <>
        <Link to="/createpost">
          <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
        記事投稿</Link>
        <Link to="/logout">
          <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon>
        ログアウト
        </Link>
        </>
        )}
    </nav>
  )
};

export default Navbar