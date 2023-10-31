import { StyleSheet, View, Image, ScrollView,Pressable } from "react-native";
import React from "react";
import SearchComp from "../../components/HomeScreenComp/SearchComp";
import CardComp from "../../components/HomeScreenComp/CardComp1";
import CardComp2 from "../../components/HomeScreenComp/CardComp2";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
    <View style={{height:40,width:40,border:1,backgroundColor:'white',top:100,borderRadius:20,right:170}}>
      <Image style={{height:40,width:40,borderRadius:20}} source={require('../../assets/profile.png')}/>
    </View>
    <Pressable onPress={()=> console.log('iconPressed')} style={{height:40,width:40,top:65,left:170}}>
    <FontAwesome
            name="bell"
            size={35}
            color={"white"}
          />
      </Pressable>
      <Image
        style={{ width: "100%", height: 270, top: 83 }}
        source={require("../../assets/wave1.png")}
      />
      <SearchComp />
      <View style={styles.cardcontainer}>
        <ScrollView horizontal={false}>
          <CardComp />
          <CardComp2 />
          <CardComp2 />
          <CardComp2 />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#A678F2",
    flexDirection: "column",
  },
  cardcontainer: {
    backgroundColor: "white",
    width: "100%",
    height: "64%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});
