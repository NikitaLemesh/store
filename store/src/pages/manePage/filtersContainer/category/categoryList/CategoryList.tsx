import React from 'react';
import { PRODUCTS } from '../../../../../constants/constants';
interface CategoryItem {
    [key: string]: number;
  }

const findCategory = (): CategoryItem => {
  const arrayCategory = PRODUCTS.reduce((acc: CategoryItem, item) => {
    if(acc[item.type]) {
      acc[item.type] += 1;  
    } else {
      acc[item.type] = 1;  
    }
    return acc;
  }, {})
  return arrayCategory;
}
export const CategoryList = () => {
    findCategory();
  return (
    <fieldset>
        <legend>fdsfsdf</legend>
        {Object.entries(findCategory()).map((item): React.ReactNode => {
           return (
            <>
              <div>
                <input type='checkbox' id={item[0]} name={item[0]} />
                <label htmlFor={item[0]}>{item[0]}</label>
              </div>
              <p>{item[1]}</p>
            </>
           )
        })}
    </fieldset>
  )
}