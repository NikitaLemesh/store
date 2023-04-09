import React from 'react';
import style from './header.module.css';
import { Logo } from './logo/Logo';
import { CartLogo } from './cartLogo/CartLogo';
import { CartTotal } from './cartTotal/CartTotal';

export const Header = () => {
  return (
    <header className={style.header}>
      <Logo />
      <CartTotal />
      <CartLogo />
    </header>
  )
}