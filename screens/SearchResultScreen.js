import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Expo's icon component
import { useNavigation } from '@react-navigation/native';

const SearchResultsScreen = ({ route }) => {
  const { searchResults } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.blueBackground} />
      <View style={styles.contentContainer}>
        {searchResults.map((wordData, index) => (
          <View key={index} style={styles.wordContainer}>
            <Text style={styles.word}>{wordData.word}</Text>
            {wordData.phonetics.map((phonetic, phoneticIndex) => (
              <View key={phoneticIndex}>
                <Text style={styles.phonetic}>{phonetic.text}</Text>
                {/* You can render audio or other phonetic data here */}
              </View>
            ))}
            {wordData.meanings.map((meaning, meaningIndex) => (
              <View key={meaningIndex} style={styles.meaningContainer}>
                <Text style={styles.partOfSpeech}>{meaning.partOfSpeech}</Text>
                {meaning.definitions.map((definition, defIndex) => (
                  <Text key={defIndex} style={styles.definition}>
                    {definition.definition}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  blueBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '20%', // Cover 20% of the screen
    backgroundColor: '#2E86C1', // Sky blue color
    borderBottomRightRadius: 20, // Rounded corners at the bottom
    borderBottomLeftRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10%', // Move search bar down
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  contentContainer: {
    flex: 1,
    marginTop: '20%', // Adjust margin to make space for search bar
    backgroundColor: '#fff',
    padding: 20,
  },
  resultItem: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  word: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  meaningContainer: {
    marginTop: 10,
  },
  partOfSpeech: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  definition: {
    fontSize: 14,
    color: '#333',
  },
  wordContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  word: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  phonetic: {
    fontSize: 16,
    color: '#555',
  },
  meaningContainer: {
    marginTop: 10,
  },
  partOfSpeech: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  definition: {
    fontSize: 14,
    color: '#333',
  },
});

export default SearchResultsScreen;
