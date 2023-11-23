import { StyleSheet, Text, View,Image} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function TopCards() {
  return (
        <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          top: 260,
          position:'absolute',
        }}
      >
        <LinearGradient
          colors={["rgba(217, 217, 217, 0.2)", "rgba(217, 217, 217, 0)"]}
          style={styles.topcard1}
        >
          <View
            style={{
              width: 70,
              height: 70,
              borderRadius: 50,
              bottom: 25,
              left: 13,
              borderColor: "#48D5A6",
              borderWidth: 2,
            }}
          >
            <Image
              style={{ width: 65, height: 65 }}
              source={require("../assets/profile.png")}
            />
            <Text style={styles.badge1}>2</Text>
            <Text style={{fontSize:10,fontWeight:"900",color:'white',left:4,bottom:3}}>Arjun kumar</Text>
            <Text style={{fontSize:10,fontWeight:"900",color:'#48D5A6',left:20,bottom:2}}>98.31%</Text>
          </View>
        </LinearGradient>
        <LinearGradient
          colors={["rgba(217, 217, 217, 0.5)", "rgba(217, 217, 217, 0)"]}
          style={styles.topcard2}
        >
          <View
            style={{
              width: 103,
              height: 103,
              backgroundColor: "transparent",
              borderRadius: 50,
              bottom: 45,
              left: 13,
              borderColor: "#FED003",
              borderWidth: 2,
            }}
          >
            <Image style={{width:23.16,height:21,bottom:30,left:35}} source={require('../assets/Crown.png')}/>
            <Image
              style={{ width: 99, height: 99,bottom:21}}
              source={require("../assets/profile.png")}
            />
             <Text style={styles.badge3}>1</Text>
             <Text style={{fontSize:13,fontWeight:"900",color:'white',left:4,bottom:30}}>Sonam Powar</Text>
            <Text style={{fontSize:13,fontWeight:"900",color:'#FED003',left:30,bottom:27}}>99.01%</Text>
          </View>
        </LinearGradient>
        <LinearGradient
          colors={["rgba(217, 217, 217, 0.2)", "rgba(217, 217, 217, 0)"]}
          style={styles.topcard3}
        >
          <View
            style={{
              width: 70,
              height: 70,
              backgroundColor: "transparent",
              borderRadius: 50,
              bottom: 25,
              left: 13,
              borderColor: "#F6A14A",
              borderWidth: 2,
              opacity: 0.9,
            }}
          >
            <Image
              style={{ width: 65, height: 65 }}
              source={require("../assets/profile.png")}
            />
            <Text style={styles.badge2}>3</Text>
            <Text style={{fontSize:10,fontWeight:"900",color:'white',left:4,bottom:3}}>Ram Jadhav</Text>
            <Text style={{fontSize:10,fontWeight:"900",color:'#F6A14A',left:20,bottom:2}}>97.01%</Text>
          </View>
        </LinearGradient>
      </View> 
  );
}

const styles = StyleSheet.create({
  topcard1: {
    width: 96,
    height: 138,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    top: 30,
    right: 0.5,
  },
  topcard2: {
    width: 126,
    height: 147,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    bottom: 5,
  },
  topcard3: {
    width: 96,
    height: 138,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    top: 30,
    left: 0.5,
  },
  badge1: {
    height: 18,
    width: 18,
    backgroundColor: "#48D5A6",
    borderRadius: 50,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "900",
    color: "white",
    left: 25,
    bottom: 8,
  },
  badge2: {
    height: 18,
    width: 18,
    backgroundColor: "#F6A14A",
    borderRadius: 50,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "900",
    color: "white",
    left: 25,
    bottom: 8,
  },
  badge3: {
    height: 20,
    width: 20,
    backgroundColor: "#FED003",
    borderRadius: 50,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "900",
    color: "white",
    left: 40,
    bottom: 32,
  },
});
