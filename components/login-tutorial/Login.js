import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { ScrollView } from 'react-native-web';
import Myform from './Myform';

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.logocontainer}>
          <Image 
            style={styles.logo}
          source={require('../../assets/ilogo.png')}/>
          <Text style={styles.title}>A simple login App</Text>
      </View>
      <View style={styles.myform}>
          <Myform/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#282830',
    width: Dimensions.get('window').width
  },
  logocontainer: {
    alignItems:'center',
    justifyContent:'center',
    
    flexGrow:1
  },
  logo:{
      width:100,
      height:100
  },
  myform:{
      flex:1

  },
  title:{
    color:'white',
    marginTop:10
  }
  
});
