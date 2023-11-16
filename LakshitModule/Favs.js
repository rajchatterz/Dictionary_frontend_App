import { StyleSheet, Image, View, Text, FlatList } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feed from "./Feed";
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function Favs() {
  const fixedLength = 5;
  return (
    <View style={styles.container}>
      <AntDesign
        onPress={() => console.log("Pressed")}
        style={{ top:74, right: 170 }}
        name="arrowleft"
        size={22}
        color={"black"}
      />
      <Text
        style={{ top:50, fontSize: 18, right: 110, fontWeight: "900" }}
      >
        Favorite
      </Text>
      <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{top:50}}
       data={Feed.slice(0,fixedLength)} 
       renderItem={({ item }) => (
      <View style={styles.listcard}>
        <FontAwesome style={{textAlign:'right',marginRight:6,top:3}} name="heart" size={20} color={"red"}/>
        <Text style={{fontSize:16,lineHeight:20,left:10,bottom:15,letterSpacing:-0.28,fontWeight:'bold'}}>
        {item.Interest}
        </Text>
        <Text style={{fontSize:14,lineHeight:15,left:10,bottom:10,letterSpacing:-0.28,fontWeight:'400',color:'#585A5B'}}>{item.caption}</Text>
      </View>
  )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  listcard:{
    backgroundColor: "white",
    width: 360,
    height: 75,
    borderRadius: 6,
    borderWidth:0.4,
    marginBottom: 15,
    top:20,
  },
});
