import { StyleSheet, Text, View } from 'react-native';

export default function Green(){
    return(
        <View>
            <View style={style.container}>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        height:50,
        width:50,
        backgroundColor:'green'
    }
})