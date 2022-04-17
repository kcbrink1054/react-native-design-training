import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.header}>
        
        <Image
            source={require('./images/carticon.png')}
            style={styles.logo}
        />
        <Text style={styles.title}>LCO Shopping Cart</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        // flex: 1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        height:85,
        // marginTop:20,
        flexDirection:'row',
        paddingVertical: 20,
        width: Dimensions.get('window').width,
        borderBottomWidth:4,
        borderColor:'#ccc'

    },
    logo:{
        height:40,
        width:40,
        marginTop:20
    },
    title:{
        marginTop:20,
        marginLeft:10,
        // marginBottom:10,
        color:'#000',
        fontWeight:'bold',
        fontSize:15,
        // fontStyle:'italic'
    }
})