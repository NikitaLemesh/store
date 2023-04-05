import React from 'react';
import { StyleSheet } from 'react-native';
import { PRODUCTS } from '../../constants/constants';

const styles = StyleSheet.create({
    size: {
        width: 160,
        height: 160
    }
})

export const ImageProduct = () => {
  return (
    <img
      style={styles.size}
      src={PRODUCTS[0].imageFirst}
      alt='nike'
    />
  )
}
