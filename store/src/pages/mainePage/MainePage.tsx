import React from "react";
import { ItemsContainer } from "./itemsContainer/ItemsContainer";
import { CategoryContainer } from "./filtersContainer/category/CategoryContainer";
import styles from './mainPage.module.css'

export const MainePage = () => {
  return (
    <section className={styles.section__maine}>
      <CategoryContainer />
      <ItemsContainer />
    </section>
  )
}