import {
  StyleSheet,
  Text,
  View,
  Modal,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  Dimensions,
  Pressable,
} from "react-native";

import { FontAwesome } from '@expo/vector-icons';


import React, { useState, useEffect, useLayoutEffect } from 'react';
//location
import * as Location from 'expo-location';

import Carousel from "../components/Carousel";
import FoodTypes from "../components/FoodTypes";
import QuickFood from "../components/QuickFood";
import { Ionicons } from "@expo/vector-icons";
import hotels from "../data/hotels";
import MenuItem from "../components/MenuItem";
import QuestionPaper from "../components/QuestionPapers"
import BottomSheet from "../components/Bottom_sheet_drawer"

import Geocoder from 'react-native-geocoding';
import { MaterialIcons } from '@expo/vector-icons';
const HomeScreen = ({ navigation }) => {
  Geocoder.init("AIzaSyBuxI-ect9yK8dLwiwT2bLsIpPfq2j8Ar0");
  const data = hotels;
  const [location, setLocation] = useState("Loading...");
  const [errorMsg, setErrorMsg] = useState(null);


  // We need to get the height of the phone and use it relatively, 
  // This is because height of phones vary
  const windowHeight = Dimensions.get('window').height;

  // This state would determine if the drawer sheet is visible or not
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  // Function to open the bottom sheet 
  const handleOpenBottomSheet = () => {
      setIsBottomSheetOpen(true);
  };

  // Function to close the bottom sheet
  const handleCloseBottomSheet = () => {
      setIsBottomSheetOpen(false);
  };


  //to style and configure header title and all
  useLayoutEffect(() => {
      const college = "COEP Technological University"
      navigation.setOptions({
          title: 'Home',
          headerTitle: "",
          tabBarLabelStyle : {
            fontSize:12,
            fontWeight:"600"
        },
          tabBarLable: "Feed",
          headerLeft: () => (
              <>
                  <TouchableOpacity onPress={() => { }}>
                      <View >

                          <Text style={{ fontSize: 18, marginLeft: 15, color: "white", fontWeight: 'bold' }}>Address</Text>
                          <View style={{ flexDirection: "row" }}>
                              <Ionicons onPress={() => console.log("Location")} style={{ marginLeft: 15 }} name="location-outline" size={14} color="white" />
                              <Text numberOfLines={1} ellipsizeMode='tail' style={{ color: "white", fontSize: 12 }}>{location.slice(0, 30)}</Text>
                          </View>
                      </View>
                  </TouchableOpacity>
              </>
          ),
          headerRight: () => (
              <>

                  <View style={{ flexDirection: "row" }}>

                      <Ionicons onPress={() => navigation.navigate('Help')} style={{ marginRight: 15 }} name="help-circle" size={26} color="white" />

                      <Ionicons onPress={() => navigation.navigate('Notification')} style={{ marginRight: 15 }} name="notifications" size={26} color="white" />

                  </View>


              </>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="local-laundry-service" size={size} color={color} />
          ),
      });
  }, [navigation, location]);

  useEffect(() => {
      (async () => {

          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
              setErrorMsg('Permission to access location was denied');
              return;
          }

          let location = await Location.getCurrentPositionAsync({});

          Geocoder.from(location.coords.latitude, location.coords.longitude)
              .then((json) => {
                  const addressComponent = json.results[0].formatted_address;
                  console.log(addressComponent);
                  setLocation(addressComponent)
              })
              .catch((error) => console.warn(error));

      })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
      text = errorMsg;
  } else if (location) {
      text = JSON.stringify(location);
      console.log(text)
  }

  return (

      <View style={{ backgroundColor: "white" , height:"100%" }}>




          <ScrollView style={{ marginTop: 10 }}>


              {/* Image slider Component */}
              <Carousel />

              {/* Food Item Types */}
              <FoodTypes />

              {/* Quick Food Component */}
              <QuickFood />

              <BottomSheet />
             

             



          </ScrollView>
      </View>

  );
};

export default HomeScreen;

