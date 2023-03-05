import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";



import React from "react";

import Carousel from "../components/Carousel";
import FoodTypes from "../components/FoodTypes";
import QuickFood from "../components/QuickFood";
import { Ionicons } from "@expo/vector-icons";
import hotels from "../data/hotels";
import MenuItem from "../components/MenuItem";

const HomeScreen = () => {
  const data = hotels;
  return (
 

    
    
    <ScrollView style={{ marginTop: 10 }}>


      {/* Image slider Component */}
      <Carousel />

      {/* Food Item Types */}
      <FoodTypes />

      {/* Quick Food Component */}
      <QuickFood />

      {/* Filter buttons */}
      
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            width:120,
            justifyContent: "center",
          }}
        >
          <Text style={{marginRight:6 , color:"#4338ca" , fontWeight:"800"}}>Filter</Text>
          <Ionicons name="filter" size={20} color="#4338ca" />
        </Pressable>

        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            justifyContent: "center",
            width:120
          }}
        >
          <Text style={{color:"#4338ca" , fontWeight:"800"}}>Sort By Price</Text>
         
        </Pressable>

        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 2,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            
            
            justifyContent: "center",
          }}
        >
          <Text style={{color:"#4338ca" , fontWeight:"800"}}>Post your work +</Text>
         
        </Pressable>
      </View>
      {data.map((item,index) => (
        <MenuItem key={index} item={item}/>
      ))}
    </ScrollView>
 
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
