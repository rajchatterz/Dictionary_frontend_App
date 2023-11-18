import { StyleSheet, Text, View,FlatList,Image} from 'react-native'
import React,{useState} from 'react'
import Feed from '../LakshitModule/Feed'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons"

export default function WordList () {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{flex:1,flexDirection:'row',top:85}}>
      <Ionicons style={{left:210}} onPress={()=>navigation.navigate('SwipeList')} name="eye" size={24}color={'black'}/>
       <AntDesign style={{right:150}} onPress={()=>navigation.goBack()} name="arrowleft" size={24} color={'black'}/>
        <Text style={styles.headertext}>Word list</Text>
      </View>
      <View style={{flex:4,bottom:40}}>
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
              <Text
                style={styles.cardtext2}
              >
                {item.word}
              </Text>
              <FontAwesome5 style={{bottom:80,textAlign:'right',right:20}} onPress={()=>navigation.navigate('Resist')} name="arrow-circle-right" size={22} color={'#8F6ACD'}/>
         </View>
        }
        />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    },
    listcard:{
        backgroundColor: "white",
        width: 370,
        height: 110,
        borderRadius: 10,
        marginBottom: 15,
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
        fontSize:20,
        fontWeight:'900',
        right:140,
        bottom:2
      },
      cardtext2:{
        textAlign: "left",
        bottom: 100,
        fontSize: 14,
        fontWeight: "400",
        left: 115,
        lineHeight:25,
        letterSpacing:-0.32
      },
})