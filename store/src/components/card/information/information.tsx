import  React from "react";
import { Stock } from "./stock/Stock";
import { Type } from "./type/Type";
import { Price } from "./price/Price";
import { Rating } from "./rating/Rating";
import { Info } from "../../../constants/interface";
import styles from './information.module.css';

export const Information = (props: Info) => {

  return (
    <ul className={styles.ul__card}>
      <Type type={props.type} />
      <Price price={props.price} />
      <Rating rating={props.rating} />
      <Stock stock={props.stock} />
    </ul>
  )
}