import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native'
import React from 'react'

export default function Body() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.bigview}>
            <View style={styles.smallview}>
                <Image
                    style={styles.myimage}
                    source={require('../images/img1.jpg')}
                />
            </View>
            <View style={styles.smallview}>
                <Image
                    style={styles.myimage}
                    source={require('../images/img2.jpg')}
                />
            </View>
            <View style={styles.smallview}>
                <Image
                    style={styles.myimage}
                    source={require('../images/img3.jpg')}
                />
            </View>
            <View style={styles.smallview}>
                <Image
                    style={styles.myimage}
                    source={require('../images/img4.jpg')}
                />
            </View>
            <View style={styles.smallview}>
                <Image
                    style={styles.myimage}
                    source={require('../images/img5.jpg')}
                />
            </View>
            <View style={styles.smallview}>
                <Image
                    style={styles.myimage}
                    source={require('../images/img6.jpg')}
                />
            </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    bigview:{
        flexDirection:'row',
        flexWrap:'wrap',
        

    },
    smallview:{
        margin:2,
        height:100,
        width: (Dimensions.get('window').width/2) - 4,   
    },
    myimage:{
        flex:1,
        width: null,
        alignSelf:'stretch'
    }
})