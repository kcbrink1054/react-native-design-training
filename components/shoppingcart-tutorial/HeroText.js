import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HeroText() {
  return (
    <View style={styles.hero}>
      <Text style={styles.heroText}>Laptops</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    hero:{

    },
    heroText: {
        elevation:1,
        // shadowColor:'#000',
        // shadowOffset:{width: 0, height: 2},
        // shadowOpacity:0.8,
        // shadowRadius:3,
        // borderRadius:10,
        alignSelf:'center',
        fontSize:25,
        color:'#292929',
        textAlign:'center',
        backgroundColor:'rgba(255,255,255,0.7)',
        padding:10,
        fontWeight:'bold'

    }
})