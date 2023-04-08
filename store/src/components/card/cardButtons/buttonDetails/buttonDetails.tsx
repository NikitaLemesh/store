import React from "react";

export const ButtonDetails = () => {
  const showDetails = () => {
    console.log('ggg')
  }
  return (
    <button onClick={showDetails}>Details</button>
  )
}