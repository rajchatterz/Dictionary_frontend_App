import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";

export default function CardComp2() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Play and Progress</Text>
      <View style={styles.CardContainer}>
        <View
          style={{
            width: 125,
            height: 150,
            backgroundColor: "orange",
            borderRadius: 10,
            margin: 20,
          }}
        >
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center",top:10 }}
          >
            <Image
              style={{ width: 81, height: 77 }}
              source={require("../../assets/Rectangle2.png")}
            />
            <Text style={{fontSize:20,top:5,fontWeight:'900',color:'#F24E1E',left:10}}>Guesss</Text>
            <Image style={{height:20,width:20,right:50,bottom:17,marginLeft:19}} source={require('../../assets/Vector2.png')}/>
          </View>
        </View>
        <View
          style={{
            width: 125,
            height: 150,
            backgroundColor: "#ADB4E8",
            borderRadius: 10,
            margin: 20,
          }}
        >
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center",top:10 }}
          >
            <Image
              style={{ width: 81, height: 77 }}
              source={require("../../assets/Rectangle1.png")}
            />
            <Text style={{fontSize:20,top:5,fontWeight:'900',color:'#7781D4',left:10}}>Writee</Text>
            <Image style={{height:20,width:20,right:50,bottom:17,marginLeft:19}} source={require('../../assets/Vector1.png')}/>
          </View>
        </View>
        <View
          style={{
            width: 125,
            height: 150,
            backgroundColor: "#ADB4E8",
            borderRadius: 10,
            margin: 20,
          }}
        >
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Image
              style={{ width: 81, height: 77 }}
              source={require("../../assets/Rectangle1.png")}
            />
          </View>
        </View>
      </View>
      <Text style={styles.header2}>Continue your Leaning</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "900",
    color: "#263238",
    lineHeight: 39.89,
    letterSpacing: -0.28,
    right: "20%",
    bottom: 80,
  },
  CardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    bottom: 100,
    left: 40,
  },
  header2:{
    fontSize: 24,
    fontWeight: "900",
    color: "#263238",
    lineHeight: 39.89,
    letterSpacing: -0.28,
    right: "15%",
    bottom: 100
  },
});
