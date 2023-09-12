import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const WordOfTheDayCard = () => {
  const word = 'Serendipity'; // Replace with your word of the day
  const meaning = 'A fortunate and unexpected discovery'; // Replace with the word's meaning

  return (
    <View style={styles.container}>
     <View style={styles.titleContainer}>
        <Image source={{uri:"https://res.cloudinary.com/education4ol/image/upload/v1694546496/img-freepik-com-premium-vector-surprise-pop-art-word_175838-692-jpg-w-2000-removebg-preview_ln0wrh.png"}} style={styles.icon} /> 
        <Text style={styles.title}>Word of the Day !</Text>
      </View>
      <View style={styles.wordContainer}>
        <Text style={styles.word}>{word}</Text>
        <Text style={styles.meaning}>{meaning}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#21618c', // Blue background color
        padding: 20,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      icon: {
        width: 36, // Adjust the width and height as needed
        height: 36,
        marginRight: 10,
        marginBottom:10 // Add spacing between the icon and title
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF', // White text color
        paddingBottom:10
      },
      wordContainer: {
        alignItems: 'center',
      },
      word: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#FFF', // White text color
      },
      meaning: {
        fontSize: 18,
        color: '#FFF', // White text color
      },
});

export default WordOfTheDayCard;
