import React from "react";
import { PRODUCTS } from "../../../constants/constants";
import { Card } from "../../../components/card/Card";

export const ItemsContainer = () => {
  return (
    <div>
        {PRODUCTS.map((item): React.ReactNode => {
          return <Card card={item} />
        })}
    </div>
  )
}