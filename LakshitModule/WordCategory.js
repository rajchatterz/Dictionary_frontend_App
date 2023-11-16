import { StyleSheet, Text, View, Image, FlatList,ScrollView} from "react-native";
import React from "react";
import feed from "./Feed";
import * as Progress from "react-native-progress";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign"

export default function WordCategory() {
  return (
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false} >
          <View style={styles.container}>
        <AntDesign onPress={()=>console.log("Pressed")} style={{top:100,right:180}} name="arrowleft" size={22} color={'#FFFFFF'}/>
      <Image style={styles.curve} source={require("../assets/Group1.png")} />
      <Text style={styles.word}>Word Categories</Text>
      <View style={styles.cardcontainer}>
        <ScrollView
        showsVerticalScrollIndicator={false}
        horizontal={false}
        nestedScrollEnabled={true}
        contentContainerStyle={{bottom:15}}
        >
          {feed.map((item)=>(
            <View
            style={styles.listcard}
          >
            <Image
              style={styles.cardimage}
              source={{ uri: item.imageSource2 }}
            />
            <Text
              style={styles.cardtext}
            >
              {item.Interest}
            </Text>
            <Text style={{textAlign:'left',left:115,bottom: 95,fontSize:10}}>{item.check} {item.progress}</Text>
              <Progress.Bar
              style={{bottom:90,left:115}}
              progress={item.progress}
              color={"#A780E8"}
              width={150}
              borderWidth={1}
              borderColor={"#A780E8"}
              unfilledColor={"white"}
              height={7}
              animationType="timing"
              borderRadius={10}

              />
              <Text style={{textAlign:'left',left:115,bottom: 75,fontSize:13}}>{item.word}</Text>
              <FontAwesome5 onPress={()=> console.log("Pressed")} style={{textAlign:'right',bottom: 93,right:15,}} name="arrow-circle-right" size={22} color={'#8F6ACD'}/>
            </View>
          ))}
        </ScrollView>
      </View>
      </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#A678F2",
    top:25
  },
  curve: {
    width: "100%",
    height: "25%",
    top: 120,
  },
  cardcontainer: {
    width: "100%",
    height:'80%',
    bottom:60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  word: {
    fontSize: 35,
    right:50,
    bottom: 80,
    fontWeight: "900",
    color: "white",
    lineHeight: 34.48,
    letterSpacing: -0.28,
  },
  listcard:{
    backgroundColor: "white",
    width: 360,
    height: 100,
    borderRadius: 10,
    marginBottom: 15,
    top: 40,
    elevation: 4,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.23,
    shadowRadius: 10,
  },
  cardimage:{
    width: 102,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  cardtext:{
    textAlign: "left",
    bottom: 100,
    fontSize: 15,
    fontWeight: "900",
    left: 115,
  }
});
