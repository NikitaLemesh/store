import React from "react";
import { NameImages } from "../../../constants/interface";

export const ImagesContainer = (props: NameImages) => {
  return (
    <div>
      <div>
        <img src={props.imageFirst} alt={props.name} />
        <img src={props.imageSecond} alt={props.name} />
        <img src={props.imageThird} alt={props.name} />
      </div>
    </div>
  )
}