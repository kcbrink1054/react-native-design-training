import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import HeroText from './HeroText'

export default function HeroImage() {
  return (
    <ImageBackground
        source={require('./images/img1.jpg')}
        style={styles.hero}
    >
        <HeroText/>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    hero: {
    height:200,
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
  }})