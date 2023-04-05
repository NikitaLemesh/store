import React from "react";
import { PRODUCTS } from "../../../constants/constants";

export const Information = () => {
  const information: [{stock: number}, {type: string}, { rating: number}, {price: number}] = PRODUCTS[0].info;
  return (
    <div>
        <p>{information[0].stock}</p>
    </div>
  )
}