import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-web';

export default function HorizontalView() {
  return (
    <>
      <ScrollView pagingEnabled={true} horizontal={true} style={styles.parentContainer}>
          <View style={[styles.pageOne,styles.pageContainer]}><Text style={styles.myFont}>Page 1</Text></View>
          <View style={[styles.pageTwo,styles.pageContainer]}><Text style={styles.myFont}>Page 2</Text></View>
          <View style={[styles.pageThree,styles.pageContainer]}><Text style={styles.myFont}>Page 3</Text></View>
      </ScrollView>
      {/* <View style={styles.paging}>
        <Text>Test</Text>
      </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  paging:{
    flex:1,
    position: 'absolute',
    alignItems:'center',
    justifyContent:'center',
    width:Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    // top:0,left:0,

    // top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor:'red'
    // height: 100
  },
  parentContainer: {


    
    
  },
  container: {
    flex: 1,
    
    
  },
  pageContainer:{
    // backgroundColor: 'red',
    width:Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageOne:{
    backgroundColor:'#1FAA59',
    
  },
  pageTwo:{
    backgroundColor:'#1B98F5'
  },
  pageThree:{
    backgroundColor:'#EDBF69'
  },
  myFont:{
    fontSize: 20,
    fontWeight:'bold'
  }
});
