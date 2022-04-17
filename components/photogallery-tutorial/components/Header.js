import { ImageBackground,StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <ImageBackground
        style={styles.headerbg}
        source={require("../images/headerbg.jpg")}
    >
      <View style={styles.headercontainer}>
        <View style={styles.profilepiccontainer}>
            <Image
                style={styles.mypic}
                source={require('../images/profilepic.jpg')}
            />
        </View>
        <Text style={styles.name}>Kalan Brinkley</Text>
        <Text style={styles.liner}>A part time animator</Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    headerbg:{
        flex:1,
        width: null,
        alignSelf:'stretch'
    },
    headercontainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding: 20,
        backgroundColor:'rgba(0,0,0,0.6)'
    },
    profilepiccontainer:{
        width:180,
        height:180,
        // borderRadius:100,
        // borderWidth:15,
        // borderColor:'rgba(0,0,0,0.4)'
    },
    mypic:{
        flex:1,
        width: null,
        alignSelf:'stretch',
        borderRadius:90,
        borderWidth:3,
        borderColor:'#fff'
    },
    name:{
        marginTop:18,
        fontSize:18,
        color:'#fff',
        fontWeight:'bold'
    },
    liner:{
        color:'#fff',
        fontSize:15,
        fontStyle:'italic',
        marginTop:5
    }
})