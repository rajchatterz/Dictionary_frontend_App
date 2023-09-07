import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const HomeInfoCards = ({ wordOfTheDay, didYouKnow }) => {

    const highlightWord = (text, word, color) => {
        const words = text.split(' ');
        return words.map((w, index) =>
          w.toLowerCase() === word.toLowerCase() ? (
            <Text key={index} style={{ backgroundColor: color }}>
              {w}
            </Text>
          ) : (
            <Text key={index}>{w}</Text>
          )
        );
      };
      
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/732/732436.png'}} style={styles.tinyImage} />
          <Text style={styles.cardTitle}>Word of the Day</Text>
        </View>
        <Text style={styles.cardText}>
          Word: {highlightWord(wordOfTheDay.word, wordOfTheDay.word, '#f1e740')}
        </Text>
        <Text style={styles.cardText}>Meaning: {wordOfTheDay.meaning}</Text>
        {/* Add more details like pronunciation and derived */}
      </View>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/5361/5361003.png'}} style={styles.tinyImage} />
          <Text style={styles.cardTitle}>Did You Know?</Text>
        </View>
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
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tinyImage: {
    width: 20,
    height: 20,
    marginRight: 5,
    marginBottom: 10,
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
  cardTextWord: {
    fontSize: 16,
    color: '#333',
    backgroundColor:'#f1e740'
  },
});

export default HomeInfoCards;
