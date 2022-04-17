import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CompoImage from './CompoImage'

export default function Body() {
  return (
    <View style={styles.container}>
        <View style={styles.column1}>
            <CompoImage imageSource={require('./images/img2.jpg')}/>
        </View>
        <View style={styles.column2}>
        <CompoImage imageSource={require('./images/img6.jpg')}/>
        </View>
        <View style={styles.full}>
        <CompoImage imageSource={require('./images/img3.jpg')}/>
        </View>
        <View style={styles.column1}>
            <CompoImage imageSource={require('./images/img4.jpg')}/>
        </View>
        <View style={styles.column2}>
        <CompoImage imageSource={require('./images/img6.jpg')}/>
        </View>
        <View style={styles.full}>
        <CompoImage imageSource={require('./images/img2.jpg')}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        padding: 5,
        backgroundColor:'#3b5998'
    },
    column1:{
        flex:1,
        padding:5
    },
    column2:{
        flex:2,
        padding:5
    },
    full:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        padding:5
    },
})