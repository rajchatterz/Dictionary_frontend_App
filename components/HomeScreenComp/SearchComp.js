import { StyleSheet, Text, View,Pressable} from "react-native";
import React from "react";
import Fontisto from 'react-native-vector-icons/Fontisto'
import { useNavigation } from "@react-navigation/native";

export default function SearchComp() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Hello, Saransh!</Text>
      <Text style={styles.text2}>
        Let’s Begin your journey to amplify English.
      </Text>
      <View style={styles.searchcontainer}>
         <Text style={styles.searchbar}>Search for Words......</Text>

          <Pressable onPress={()=>navigation.navigate('SearchComp')} style={{bottom:58,position:'absolute',left:20}}>
            <Fontisto name="search" size={22} color={"#8E5BE4"}/>
        </Pressable>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding:20
  },
  headerText: {
    width: 181,
    height: 29,
    fontSize: 24,
    fontWeight: "900",
    color: "white",
    lineHeight: 29.26,
    letterSpacing: -0.28,
    bottom: 110,
  },
  text2: {
    width: 349,
    height: 19,
    fontSize: 15,
    fontWeight: "500",
    color: "white",
    lineHeight: 18.29,
    letterSpacing: -0.28,
    bottom: 110,
  },
  searchcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  searchbar: {
    backgroundColor: "white",
    width:360,
    height: 50,
    borderRadius: 10,
    bottom:70,
    textAlignVertical:'center',
    paddingLeft:60,
    color:'#CCCCCC'
  },
});
