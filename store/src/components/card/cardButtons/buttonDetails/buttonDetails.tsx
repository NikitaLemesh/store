import React from "react";
import { PRODUCTS, idDetailsPage } from "../../../../constants/constants";
import { Link } from 'react-router-dom';

export const ButtonDetails = () => {
  const clickB = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.currentTarget.parentNode as HTMLElement;
    const idCard: number = Number(target.getAttribute('id'));
    for (let i = 0; i < PRODUCTS.length; i += 1) {
      if (PRODUCTS[i].id === idCard) {
        idDetailsPage.id = i;
        break;
      }
    }
  }
  return (
    <>
      <button onClick={clickB}><Link to='/details'>Details</Link></button>
    </>
  )
}