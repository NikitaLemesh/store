import React from "react";
import { PRODUCTS } from "../../../constants/constants";
import { Card } from "../../../components/card/Card";

export const ItemsContainer = () => {
  return (
    <ul>
        {PRODUCTS.map((item): React.ReactNode => {
          return <li><Card card={item}/></li>
        })}
    </ul>
  )
}