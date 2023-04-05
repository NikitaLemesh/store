import React from 'react';
import { StyleSheet } from 'react-native';
import { ImageProduct } from '../imageProduct/imageProduct';

const styles = StyleSheet.create({
    cardStyle: {
        width: 160,
        height: 360,
        backgroundColor: 'red',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'green'
    }
})

export const Card = () => {
    return (
      <div style={styles.cardStyle}>
        <ImageProduct />
      </div>
    )
}