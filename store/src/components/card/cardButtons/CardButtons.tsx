import React from 'react';
import { ButtonAdd } from './buttonAdd/ButtonAdd';
import { ButtonDetails } from './buttonDetails/ButtonDetails';
import styles from './cardButtons.module.css'

export const CardButtons = () => {
  return (
    <div className={styles.div__btns}>
      <ButtonAdd />
      <ButtonDetails />
    </div>
  )
}