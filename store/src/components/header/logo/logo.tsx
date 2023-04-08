import React from 'react';
import { Link } from 'react-router-dom';
import style from './logo.module.css';

export const Logo = () => {
  return (
    <div>
      <img src="./images/logo.jpg" alt="logo" className={style.img__logo}/>
      <h1><Link to='/'>Online Store</Link></h1>
    </div>
  )
}