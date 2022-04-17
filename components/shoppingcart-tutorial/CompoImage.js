import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CompoImage(props) {
  return (
    <Image
        source={props.imageSource}
        style={styles.image}
    />
  )
}

const styles = StyleSheet.create({
    image:{
        height:150,
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    }
})