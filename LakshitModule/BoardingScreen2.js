import { StyleSheet,View,ImageBackground} from 'react-native'
import React from 'react'

export default function BoardingScreen2() {
  return (
    <View style={styles.container}>
      <ImageBackground resizeMode='cover' style={styles.image} source={require('../assets/Onboarding2.png')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
   },
   image:{
     height:900,
     width:"100%"
   }
})