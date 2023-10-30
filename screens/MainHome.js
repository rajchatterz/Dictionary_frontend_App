import { StyleSheet, View, Image, Dimensions } from 'react-native'
import React from 'react'
import SearchComp from '../components/SearchComp'
import CardComp from '../components/CardComp1'
import CardComp2 from '../components/CardComp2'

export default function MainHome() {
  return (
    <View style={styles.container}>
      <Image style={{width:'100%',height:270,top:93}} source={require('../assets/wave1.png')}/>
        <SearchComp/>
      <View style={styles.cardcontainer}>
        <View style={{flex:1,alignItems:'center'}}>
        <CardComp/>
        </View>
        <View style={{flex:1,alignItems:'center'}}>
        <CardComp2/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#A678F2'
    },
    cardcontainer:{
      backgroundColor:'white',
      width:"100%",
      height:"64%",
      borderTopRightRadius:30,
      borderTopLeftRadius:30,
    }
})