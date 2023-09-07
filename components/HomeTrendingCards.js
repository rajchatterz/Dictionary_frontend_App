import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HomeTrendingCard = ({ imageSource, description }) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: imageSource}} style={styles.cardImage} />
      <View style={styles.cardDescriptionContainer}>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 350,
    marginRight: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 1,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 140,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardDescriptionContainer: {
    padding: 10, // Add padding around the description
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center', // Center the text within the container
  },
});

export default HomeTrendingCard;
