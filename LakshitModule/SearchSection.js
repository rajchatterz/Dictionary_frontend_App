import { Dimensions, StyleSheet, TextInput, View,Text } from 'react-native'
import React from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"

export default function SearchSection() {
  return (
    <View style={styles.container}>
      <AntDesign style={{right:195,top:10}} name="arrowleft" size={22} color={'#49454F'}/>
       <TextInput 
       placeholder='Search for Words......'
       style={[styles.searchbar,styles.searchbarshadow]}
       />
       <FontAwesome style={{right:140,bottom:12}} name="search" size={22} color={"#8E5BE4"} />
       <View style={{flex:0.6,alignItems:'center',justifyContent:'flex-start',top:15,right:110}}>
        <Text style={styles.recenttext}>Recent Searches</Text>
        <Entypo onPress={()=>console.log('Pressed')} style={{right:80,bottom:19}} name='back-in-time' size={20} color={'#49454F'}/>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',
        top:80
    },
    searchbar:{
        backgroundColor:'white',
        width:Dimensions.get('screen').width*0.85,
        height:43,
        borderRadius:10,
        paddingLeft:50,
        position:'absolute',
        right:20
    },
    searchbarshadow:{
     shadowColor: "black",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 10,
    shadowOffset: { width: -3, height: 13 },
    },
    recenttext:{
      fontSize:16,
      fontWeight:'500',
      lineHeight:19.5,
      letterSpacing:-0.32
    }
})