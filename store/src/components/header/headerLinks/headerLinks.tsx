import React from "react";
import { Link, Outlet } from 'react-router-dom';

export const HeaderLinks = () => {
  return (
    <>
    <header>
      <ul>
        <li><Link to='/cart'>Cart</Link></li>
      </ul>
    </header>
    <Outlet />
    </>
  ) 
}