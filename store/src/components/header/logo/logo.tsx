import React from 'react';
import style from './logo.module.css';

export const Logo = () => {
  return (
    <div>
      <img src="./images/logo.jpg" alt="logo" className={style.img__logo}/>
      <h1>Online Store</h1>
    </div>
  )
}