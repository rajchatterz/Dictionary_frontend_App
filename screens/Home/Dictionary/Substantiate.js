import {StyleSheet, Text, View,Image } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation } from "@react-navigation/native";
export default function Substantiate() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.topcardcontainer}>
        <AntDesign onPress={()=>navigation.goBack()} style={{top:30,left:30}} name="arrowleft" size={22} color={'#FFFFFF'}/>
        <View style={{flex:1,alignItems:'center',justifyContent:'center',top:25}}>
        <Text style={{fontSize:28,lineHeight:34.15,letterSpacing:1,fontWeight:'900',color:'white'}}>Substantiate</Text>
        </View>
        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',marginHorizontal:30}}> 
            <Image style={{width:65,height:65,}} source={require('../../../assets/save.png')}/>
            <Image style={{width:65,height:65,}} source={require('../../../assets/favorite.png')}/>
            <Image style={{width:65,height:65,}} source={require('../../../assets/share.png')}/>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    top:40,
    backgroundColor:'white'
  },
  topcardcontainer: {
    width: '100%',
    height:'30%',
    backgroundColor: "#8F6ACD",
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    resizeMode:'cover'
  },
});
