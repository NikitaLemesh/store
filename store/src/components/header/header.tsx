import React from 'react';
import style from './header.module.css';
import { Logo } from './logo/logo';
import { HeaderLinks } from './headerLinks/headerLinks';

export const Header = () => {
  return (
    <div className={style.header}>
      <Logo/>
      <HeaderLinks/>
    </div>
  )
}