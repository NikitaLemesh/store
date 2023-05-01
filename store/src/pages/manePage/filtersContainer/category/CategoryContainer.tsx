import React from 'react';
import styles from './categoryContainer.module.css';
import { CategoryList } from './categoryList/CategoryList';

export const CategoryContainer = () => {
  return (
    <div className={styles.div__category}>
        <CategoryList />
    </div>
  )
}