// InfoCards.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeInfoCards = ({ wordOfTheDay, didYouKnow }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Word of the Day</Text>
        <Text style={styles.cardText}>Word: {wordOfTheDay.word}</Text>
        <Text style={styles.cardText}>Meaning: {wordOfTheDay.meaning}</Text>
        {/* Add more details like pronunciation and derived */}
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Did You Know?</Text>
        <Text style={styles.cardText}>{didYouKnow.fact}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: "2%",
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    flex: 1,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#333',
  },
});

export default HomeInfoCards;
