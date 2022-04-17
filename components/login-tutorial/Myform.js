import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Image, TextInput, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-web';

export default function Myform() {
  return (
    <View style={styles.container}>
        <TextInput
            placeholder='Username'
            style={styles.input}
        />
        <TextInput
            placeholder='Password'
            style={styles.input}
            secureTextEntry={true}
        />
        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20
  },
  input:{
      height: 40,
      backgroundColor:'rgba(255,255,255,0.8)',
      paddingLeft:10,
      marginBottom:20
  },
  buttonContainer:{
    backgroundColor:'#27ae60',
    paddingVertical:15
  },
  buttonText:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold'
  }
})