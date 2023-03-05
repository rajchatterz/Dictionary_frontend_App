import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import hotels from "../data/hotels";


const Cloud = () => {
  const data = hotels;
  return (
    <View>
    <ScrollView style={{ marginTop: 10 }}>
      {/* Search Bar  */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 1,
          margin: 10,
          padding: 10,
          borderColor: "#C0C0C0",
          borderRadius: 7
          
        }}
      >
        <TextInput
          style={{fontSize: 17}}
          placeholder="Search from 12000+ Assignments"
        />
        <AntDesign name="search1" size={24} color="#E52B50" />
      </View>

     
    </ScrollView>

    <View>
      
 <Image
    source={{uri: 'https://res.cloudinary.com/education4ol/image/upload/v1674064105/Library-rafiki_luqmuu.png'}}
    style={{
      alignSelf:"center",
      margin:'8%',
      width: '70%',
      height: '70%',
    
      
  }}
  
/>
    </View>
    

    </View>
  );
};

export default Cloud;

const styles = StyleSheet.create({});
