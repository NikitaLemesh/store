import React from "react";
import { PRODUCTS, idDetailsPage } from "../../../../constants/constants";
import { Link } from 'react-router-dom';
import styles from './buttonDetails.module.css'

export const ButtonDetails = () => {
  const showDetails = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.currentTarget.parentNode?.parentNode as HTMLElement;
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
      <button onClick={showDetails} className={styles.btn__details}><Link to='/details' className={styles.btn__span}>Details</Link></button>
    </>
  )
}