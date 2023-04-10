import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://t4.ftcdn.net/jpg/02/76/56/55/360_F_276565541_TbJYGVmnsQtP4bIJF9A0NwsMnPWMutvD.jpg",
    "https://kisiifinest.co.ke/wp-content/uploads/2022/11/List-of-Best-Laundry-Services-in-Kisii-Town.jpg",
    "https://img.freepik.com/premium-photo/happy-smart-kid-typing-laptop-during-school-online-lesson-modern-education-school-girl-portrait-with-laptop-horizontal-poster-banner-header-with-copy-space_545934-33047.jpg",
  ];

  return (
    <View>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor="#13274F"
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{
            borderRadius:6,
            width:"94%",
            height:150
        }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
