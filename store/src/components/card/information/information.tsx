import  React from "react";
import { PRODUCTS } from "../../../constants/constants";

export const Information = () => {
  const information: [{stock: number}, {type: string}, { rating: number}, {price: number}] = PRODUCTS[0].info;
  return (
    <div>
      { information?.map((item): React.ReactNode => {
        const item2 = Object.entries(item).flat();
          return  <li>{`${item2[0]}: ${item2[1]}`}</li>
        }) 
      }
    </div>
  )
}