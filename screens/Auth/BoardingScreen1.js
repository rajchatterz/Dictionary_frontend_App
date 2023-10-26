import { StyleSheet, Text, View,ImageBackground,TouchableOpacity,StatusBar} from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'

export default function BoardingScreen1() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground resizeMode='cover' style={styles.image} source={require('../../assets/Onboarding1.png')}/>
      <TouchableOpacity style={styles.icon} onPress={()=>navigation.navigate('Boarding2')}>
      <EvilIcons name="arrow-right" size={60} color={"white"}/>
      </TouchableOpacity>
      <View style={styles.doticon}>
      <Entypo name='dot-single' size={60} color={"white"}/>
      <Entypo name='dot-single' size={60} color={"#D9D9D9"} style={{right:35}}/>
      </View>
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
  },
  icon: {
    flex:1,
    alignItems:'center',
    position: 'absolute',
    bottom:30,
    right:30
  },
  doticon: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    position: 'absolute',
    bottom:25,
    left:20
  },
})