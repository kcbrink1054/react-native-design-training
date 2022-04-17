import { StyleSheet, Text, View } from 'react-native';

export function Red(){
    return(
        <View>
            <View style={style.redContainer}/>
        </View>
    )
}

export function Green(){
    return(
        <View>
            <View style={style.greenContainer}/>
        </View>
    )
}
export function Blue(){
    return(
        <View>
            <View style={style.blueContainer}/>
        </View>
    )
}
const style = StyleSheet.create({
    redContainer:{
        height:50,
        width:50,
        backgroundColor:'red'
    },
    greenContainer:{
        height:50,
        width:50,
        backgroundColor:'green'
    },
    blueContainer:{
        height:50,
        width:50,
        backgroundColor:'blue'
    },
})