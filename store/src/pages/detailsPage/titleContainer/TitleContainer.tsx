import React from 'react';
import { NameImages } from '../../../constants/interface';
import styles from './titleContainer.module.css';

export const TitleContainer = (props: NameImages) => {
  return (
    <h2 className={styles.title__container}>{props.name}</h2>
  )
}