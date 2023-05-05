import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faPen, faRightToBracket } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  return (
    <nav>
        <Link to="/">
            <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
            ホーム
            </Link>
        <Link to="/createpost">
            <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
            記事投稿
            </Link>
        <Link to="/login">
            <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon>
            ログイン
            </Link>
    </nav>
  )
};

export default Navbar