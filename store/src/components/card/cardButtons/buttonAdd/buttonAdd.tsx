import React from "react";

export const ButtonAdd = () => {
  const addItem = () => {
    console.log('ddd');
  }
  return (
    <button onClick={addItem}>Add item</button>
  )
}