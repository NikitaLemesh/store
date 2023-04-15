import React from 'react';
import styles from './detailsContainer.module.css';
import { IDetailsContainer } from '../../../constants/interface';

export const DetailsContainer = (props: IDetailsContainer) => {
  return (
    <div className={styles.details__container}>
      {props.children}
    </div>
  )
}