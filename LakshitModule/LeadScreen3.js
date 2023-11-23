import { StyleSheet, Text, View,TouchableOpacity,ImageBackground } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import CurveContainer from "./CurvContainer";
import TopCards from "./TopCards";

export default function LeadScreen3() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={require("../assets/leaderboard.png")}
      />
        <Text style={styles.headtext}>Leader Board</Text>
        <View style={styles.navcard}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Text>All Time</Text>
            </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('LeadScreen2')}>
          <Text style={{left:15}}>This Week</Text>
          </TouchableOpacity>
          <View style={styles.background}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Month</Text>
          </View>
        </View>
        <TopCards/>
        <CurveContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  navcard: {
    width: 330,
    height: 45,
    backgroundColor: "white",
    borderRadius: 13,
    top: 120,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    position:'absolute'
  },
  headtext: {
    fontSize: 24,
    fontWeight: "900",
    color: "white",
    lineHeight: 30,
    letterSpacing: -0.32,
    top: 60,
    textAlign: "center",
    position: "absolute",
  },
  background: {
    backgroundColor: "#966DDA",
    width: 109,
    height: 36,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    left:25
  },
  image: {
    top: 80,
    width: "100%",
    height: 1000,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
