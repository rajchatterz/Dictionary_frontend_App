import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
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
import QuestionPaper from "../components/QuestionPapers"

const HomeScreen = () => {
  const data = hotels;
  return (
    
<View>


    <View style={{backgroundColor:"red"}}>
          <Text style={{color:"white" , fontWeight: 'bold' , textAlign:"center"}}> Offline ! </Text>
    </View>
    <View style={{backgroundColor:"green"}}>
          <Text style={{color:"white" , fontWeight: 'bold' , textAlign:"center"}}> Back Online  </Text>
    </View>
    
    <ScrollView style={{ marginTop: 10 }}>


      {/* Image slider Component */}
      <Carousel />

      {/* Food Item Types */}
      <FoodTypes />

      {/* Quick Food Component */}
      <QuickFood />

      {/* QuestionPapers Component */}
      <QuestionPaper />

      {/* Filter buttons */}
      
     
    
    </ScrollView>
    </View>
    
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
