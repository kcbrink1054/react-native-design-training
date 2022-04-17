import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MidSection() {
  return (
    <View style={styles.mid}>
        <View style={[styles.outerView, styles.leftbar]}>
            <Text style={styles.textone}>75 +</Text>
            <Text style={styles.texttwo}>Images</Text>
        </View>
        <View style={styles.outerView}>
            <Text style={styles.textone}>100k +</Text>
            <Text style={styles.texttwo}>Subscribers</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mid:{
        flexDirection:'row',
        backgroundColor:'#CF000F',
        borderTopWidth:8,
        borderTopColor:'#fff'
    },
    outerView:{
        flex:1,
        padding:20,
        alignItems:'center'
    },
    textone:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold'
    },
    texttwo:{
        color:'#fff',
        fontSize:14,
        marginTop:5
    },
    leftbar:{
        borderRightWidth:4,
        borderRightColor:"#fff"
    }
})