import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
  return (
    <nav>
        <Link to="/">
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            ホーム
            </Link>
        <Link to="/createpost">記事投稿</Link>
        <Link to="/login">ログイン</Link>
    </nav>
  )
};

export default Navbar