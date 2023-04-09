import React from "react";
import style from './cartLogo.module.css';

export const CartLogo = () => {
  return (
    <img src="./images/cart.svg" alt="cart" className={style.img__cart} />
  )
}