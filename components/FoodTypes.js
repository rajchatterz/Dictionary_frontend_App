import { StyleSheet, Text, View ,ScrollView,Image  ,Pressable } from 'react-native'
import React from 'react'

const FoodTypes = () => {
    const types = [
        {
            id:"0",
            image:"https://res.cloudinary.com/education4ol/image/upload/v1676699928/NoBacklogs%20icons/2_fmexot.png",
            name:"CSE / IT",
        },
        {
            id:"1",
            image:"https://res.cloudinary.com/education4ol/image/upload/v1676699928/NoBacklogs%20icons/3_rp4o5y.png",
            name:"Civil"
        },
        {
            id:"2",
            image:"https://res.cloudinary.com/education4ol/image/upload/v1676699928/NoBacklogs%20icons/4_otqcao.png",
            name:"Mechanical"
        },
        {
            id:"3",
            image:"https://res.cloudinary.com/education4ol/image/upload/v1676699928/NoBacklogs%20icons/5_ylbwp6.png",
            name:"Electrical",

        },
        {
            id:"4",
            image:"https://res.cloudinary.com/education4ol/image/upload/v1676699928/NoBacklogs%20icons/7_irv1jo.png",
            name:"EN&T"
        },
        {
            id:"4",
            image:"https://res.cloudinary.com/education4ol/image/upload/v1676699927/NoBacklogs%20icons/6_obqi0v.png",
            name:"Chemical"
        },
      
        
    ]

  return (
    <View>
      <ScrollView horizontal  showsHorizontalScrollIndicator={false}>
      <View style={{flexDirection: "row", flexWrap: "wrap" , maxWidth:"100%",marginTop:10, }}>
  {types.map((item, index) => (
    
    <View style={{margin: 6, width: "21%" , alignItems:"center"}} key={index}>
      <Pressable android_ripple={{color:"#ccc" , radius: 28 , }} >
      <Image source={{uri: item.image}} style={{  width: 50, height: 50, borderRadius: 30 , transform: [{scale: 1.1}]}} />
      </Pressable>
      <Text style={{marginTop: 6, textAlign: "center"}}>{item.name}</Text>
      
    </View>
    
  ))}
</View>
      </ScrollView>
    
    </View>
  )
}

export default FoodTypes

const styles = StyleSheet.create({})