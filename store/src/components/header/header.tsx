import React from 'react';
import style from './header.module.css';
import { Logo } from './logo/Logo';
import { HeaderLinks } from './headerLinks/HeaderLinks';

export const Header = () => {
  return (
    <div className={style.header}>
      <Logo/>
      <HeaderLinks/>
    </div>
  )
}