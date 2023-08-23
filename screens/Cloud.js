import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import PatnerServices from "../components/Patners_services";

const dummyAds = [
  { id: 1, imageUrl: 'https://d3nn873nee648n.cloudfront.net/900x600/20301/300-ZM1040495.jpg' },
  { id: 2, imageUrl: 'https://d3nn873nee648n.cloudfront.net/900x600/100233/300-ZM1023963.jpg' },
  { id: 3, imageUrl: 'https://d3nn873nee648n.cloudfront.net/900x600/100087/300-ZM1027765.jpg' },
  // Add more ad images
];

const quizGameImages = [
  { id: 1, imageUrl: 'url-to-quiz-game-image-1' },
  { id: 2, imageUrl: 'url-to-quiz-game-image-2' },
  { id: 3, imageUrl: 'url-to-quiz-game-image-3' },
  { id: 4, imageUrl: 'url-to-quiz-game-image-4' },
];

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Swiper style={styles.slider} autoplay>
        {dummyAds.map((ad) => (
          <View key={ad.id} style={styles.slide}>
            <Image source={{ uri: ad.imageUrl }} style={styles.adImage} />
          </View>
        ))}
      </Swiper>

       {/* Quick Food Component */}
       <PatnerServices />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  slider: {
    height: 200,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  adImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  gamesSection: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  imagesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3, // Android shadow
  },
  gameImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default HomeScreen;
