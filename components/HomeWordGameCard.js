import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const WordGames = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.heading}>Word Games</Text>
      <Text style={styles.description}>Test your vocabulary with these fun word games!</Text> */}
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://img1.pnghut.com/9/5/11/ykqdVgFGZ3/google-play-games-grass-green-game-icon-gameplay.jpg' }} // Replace with actual image source
          style={styles.cardImage}
        />
        <View style={styles.cardDetails}>
          <View>
            <Text style={styles.cardText}>Word Game 1</Text>
            <Text style={styles.cardDescription}>Test your skills with this exciting word game.</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={24} color="#007AFF" />
        </View>
      </View>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6866/6866226.png' }} // Replace with actual image source
          style={styles.cardImage}
        />
        <View style={styles.cardDetails}>
          <View>
            <Text style={styles.cardText}>Word Game 2</Text>
            <Text style={styles.cardDescription}>Challenge yourself with this engaging word game.</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={24} color="#007AFF" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    marginBottom:50
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#777',
    marginBottom: 15,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  cardDetails: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cardDescription: {
    fontSize: 14,
    color: '#777',
  },
});

export default WordGames;
