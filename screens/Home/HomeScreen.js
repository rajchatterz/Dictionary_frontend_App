import React from "react";
import { StyleSheet, View, Image, ScrollView , Pressable  } from "react-native";
import SearchComp from "../../components/HomeScreenComp/SearchComp";
import CardComp from "../../components/HomeScreenComp/CardComp1";
import CardComp2 from "../../components/HomeScreenComp/CardComp2";
import Fontisto from "react-native-vector-icons/Fontisto";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
       <ScrollView
       showsVerticalScrollIndicator={false}
        horizontal={false}>
       <View style={styles.profileImage}>
          <Image style={styles.profileImage} source={require('../../assets/profile.png')} />
        </View>
       <Pressable onPress={() => navigation.navigate('Favorite')} style={styles.bellIcon}>
          <Fontisto name="bell" size={40} color={"white"} />
        </Pressable>
      <Image
        style={styles.backgroundImage}
        source={require("../../assets/wave1.png")}
      />
     
        <SearchComp />
        <View style={styles.cardcontainer}>
        
            <CardComp />
            <CardComp2 />
            <CardComp2 />
            
        </View>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A678F2",
    flexDirection: "column",
  },
  backgroundImage: {
    position: "absolute",
    top: 120,
    left: 0,
    width: "100%",
    height: 270,
  },
  bellIcon: {
    position: "absolute",
    top: 60,
    right: 10,
  },
  profileImage: {
    position: "absolute",
    top: 30,
    left: 10,
    height: 45,
    width: 45,
    borderRadius: 20,
  },
  cardcontainer: {
    backgroundColor: "white",
    width: "100%",
    height: "80%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
