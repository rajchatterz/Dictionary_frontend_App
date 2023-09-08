import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SlideAlert from '../components/SlideAlert';
import HomeInfoCards from '../components/HomeInfoCards';
import HomeTrendingCard from '../components/HomeTrendingCards'
import HomeWordGames from '../components/HomeWordGameCard';

const LearnPage = () => {
 
  const [loading, setLoading] = useState(false);
  const [slideAlertMessage, setSlideAlertMessage] = useState('');


  return (
    <View style={styles.container}>
      <View style={styles.blueBackground}>
        <Text style={styles.heading}>BrainBox</Text>
      </View>

    {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007AFF" />
        </View>
      )}

      {slideAlertMessage !== '' && (
        <SlideAlert message={slideAlertMessage} onSlideUpComplete={() => setSlideAlertMessage('')} />
      )}




      <ScrollView style={styles.scrollView}>
        
   
      </ScrollView>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  blueBackground: {
    backgroundColor: '#2E86C1',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    height: 120,
    paddingLeft: 20, // Added padding to align the heading to the left
    justifyContent: 'center', // Align text vertically in the middle
  },
  heading: {
    marginTop:50,
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold', // Make the font bold
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: "2%",
    marginTop: "2%",
    marginBottom: 20,
  },
 
 
  definition: {
    fontSize: 14,
    color: '#333',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: '20%',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: 1,
  },
 
});

export default LearnPage;
