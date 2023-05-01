import React from "react";
import { ItemsContainer } from "./itemsContainer/ItemsContainer";
import { CategoryContainer } from "./filtersContainer/category/CategoryContainer";

export const ManePage = () => {
  return (
    <>
      <ItemsContainer />
      <CategoryContainer />
    </>
  )
}