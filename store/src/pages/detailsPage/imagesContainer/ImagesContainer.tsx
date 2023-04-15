import React, { useState } from "react";
import styles from './imagesContainer.module.css';
import { NameImages } from "../../../constants/interface";

export const ImagesContainer = (props: NameImages) => {
  const [image, setImage] = useState(props.imageFirst)
  const changeImg = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const srcSource: string | null = target.getAttribute('src');
    if(srcSource) {
      setImage(srcSource)
    }
  }
  return (
    <div className={styles.div__container}>
      <div className={styles.div__images}>
        <input type="image" src={props.imageFirst} alt={props.name} className={styles.img__size} onClick={changeImg} />
        <input type="image" src={props.imageSecond} alt={props.name} className={styles.img__size} onClick={changeImg} />
        <input type="image" src={props.imageThird} alt={props.name} className={styles.img__size} onClick={changeImg} />
      </div>
      <img src={image} alt={props.name} className={styles.img__mane}/>
    </div>
  )
}