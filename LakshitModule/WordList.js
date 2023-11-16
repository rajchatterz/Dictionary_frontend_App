import { StyleSheet, Text, View,FlatList,Image } from 'react-native'
import React from 'react'
import Feed from './Feed'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign"

export default function WordList () {
  return (
    <View style={styles.container}>
        <AntDesign onPress={()=>console.log("Navigate")} style={{top:105,right:170}} name="arrowleft" size={22} color={'black'}/>
        <Text style={styles.headertext}>Word list</Text>
        <FlatList
        showsVerticalScrollIndicator={false}
         data={Feed}
         renderItem={({item}) =>
         <View style={styles.listcard}>
            <Image
                style={styles.cardimage}
                source={{ uri: item.imageSource2 }}
              />
              <Text
                style={styles.cardtext}
              >
                {item.Interest}
              </Text>
              <FontAwesome5 style={{textAlign:'right',bottom: 55,right:15,}} name="arrow-circle-right" size={22} color={'#8F6ACD'}/>
         </View>
        }
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    listcard:{
        backgroundColor: "white",
        width: 360,
        height: 110,
        borderRadius: 10,
        marginBottom: 15,
        top: 120,
        elevation: 4,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.23,
        shadowRadius: 10,
      },
      cardimage:{
        width: 102,
        height: 110,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
      },
      cardtext:{
        textAlign: "left",
        bottom: 100,
        fontSize: 15,
        fontWeight: "900",
        left: 115,
      },
      headertext:{
        right:110,
        top:80,
        fontSize:20,
        fontWeight:'bold'
      }
})