import React from "react";
import { PRODUCTS } from "../../../constants/constants";
import { Card } from "../../../components/card/Card";
import styles from './itemsContainer.module.css';

export const ItemsContainer = () => {
  return (
    <div className={styles.div__items}>
        {PRODUCTS.map((item): React.ReactNode => {
          return <Card card={item} />
        })}
    </div>
  )
}
