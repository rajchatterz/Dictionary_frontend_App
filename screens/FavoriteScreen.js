import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SlideAlert from '../components/SlideAlert';

const Favorite = () => {
  const [loading, setLoading] = useState(false);
  const [slideAlertMessage, setSlideAlertMessage] = useState('');
  const [favoriteWords, setFavoriteWords] = useState([
    { id: '1', word: 'Serendipity', meaning: 'The occurrence of events by chance in a happy or beneficial way.', count: 12 },
    { id: '2', word: 'Ephemeral', meaning: 'Lasting for a very short time.', count: 8 },
    { id: '3', word: 'Eloquent', meaning: 'Fluent or persuasive in speaking or writing.', count: 5 },
    { id: '4', word: 'Mellifluous', meaning: 'Sweet or musical; pleasant to hear.', count: 10 },
    { id: '5', word: 'Resilience', meaning: 'The capacity to recover quickly from difficulties; toughness.', count: 15 },
    // Add more favorite words with their meanings and counts
  ]);

  const renderFavoriteWord = ({ item }) => (
    <View style={styles.wordContainer}>
      <View style={styles.wordInfo}>
        <Text style={styles.wordText}>{item.word}</Text>
        <Text style={styles.meaningText}>{item.meaning}</Text>
      </View>
      <TouchableOpacity style={styles.favoriteButton}>
        <View style={styles.favoriteContent}>
          <Ionicons name="heart" size={24} color="#FF6666" />
          <Text style={styles.favoriteCount}>{item.count}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.blueBackground}>
        <Text style={styles.heading}>Favorites</Text>
      </View>

      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007AFF" />
        </View>
      )}

      {slideAlertMessage !== '' && (
        <SlideAlert message={slideAlertMessage} onSlideUpComplete={() => setSlideAlertMessage('')} />
      )}

      <FlatList
        data={favoriteWords}
        renderItem={renderFavoriteWord}
        keyExtractor={(item) => item.id}
        style={styles.scrollView}
      />
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
    paddingHorizontal: '2%',
    marginTop: '2%',
    marginBottom: 20,
  },
  wordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  wordInfo: {
    flex: 1,
    marginRight: 10, // Added margin to separate word and meaning
  },
  wordText: {
    fontSize: 18,
    color: '#333',
  },
  meaningText: {
    fontSize: 14,
    color: '#777',
  },
  favoriteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end', // Align the button to the right
  },
  favoriteContent: {
    alignItems: 'center',
  },
  favoriteCount: {
    marginTop: 5, // Adjust this value for spacing
    fontSize: 14,
    color: '#FF6666',
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

export default Favorite;
