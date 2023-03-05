import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://img.freepik.com/premium-psd/creative-open-admission-poster-template_23-2148233174.jpg",
    "https://img.freepik.com/premium-photo/happy-teen-girl-use-computer-video-call-listen-webinar-headphones-online-education-school-girl-portrait-with-laptop-horizontal-poster-banner-header-with-copy-space_545934-33607.jpg",
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
