import React from 'react';
import style from './header.module.css';
import { Logo } from './logo/logo';

export const Header = () => {
  return (
    <div className={style.header}>
      <Logo/>
    </div>
  )
}