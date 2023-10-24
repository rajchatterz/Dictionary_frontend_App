import { StyleSheet, Text, View,ImageBackground} from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

export default function BoardingScreen1() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground resizeMode='cover' style={styles.image} source={require('../assets/Onboarding1.png')}/>
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