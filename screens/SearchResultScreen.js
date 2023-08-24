import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Expo's icon component
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';

const SearchResultsScreen = ({ route }) => {
  const { searchResults } = route.params;
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.blueBackground}>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.keyWord}>Insipid</Text>
        {/* Four Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="ios-star" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="ios-share" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="ios-copy" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="ios-heart" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.scrollContainer}>
        {searchResults.map((wordData, index) => (
          <View key={index} style={styles.wordContainer}>
            <Text style={styles.word}>{wordData.word}</Text>
            {wordData.phonetics.map((phonetic, phoneticIndex) => (
              <Text key={phoneticIndex} style={styles.phonetic}>
                {phonetic.text}
              </Text>
            ))}
            {wordData.meanings.map((meaning, meaningIndex) => (
              <View key={meaningIndex} style={styles.meaningContainer}>
                <Text style={styles.partOfSpeech}>{meaning.partOfSpeech}</Text>
                {meaning.definitions.map((definition, defIndex) => (
                  <View key={defIndex} style={styles.definitionContainer}>
                    <Text style={styles.definition}>• {definition.definition}</Text>
                     {definition.example && (
                      <Text style={styles.example}>Example: {definition.example}</Text>
                    )}
                    {definition.subPoints && (
                      <View style={styles.subPointsContainer}>
                        {definition.subPoints.map((subPoint, subIndex) => (
                          <Text key={subIndex} style={styles.subPoint}>
                            • {subPoint}
                          </Text>
                        ))}
                      </View>
                    )}
                  </View>
                ))}
                {meaningIndex < wordData.meanings.length - 1 && (
                  <View style={styles.divider} />
                )}
              </View>
            ))}
          </View>
        ))}
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
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30%',
    backgroundColor: '#2E86C1',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Center the buttons horizontally
    marginTop: "7%",
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: "5%",
    borderRadius: 5,
    marginHorizontal: 5, // Add some horizontal margin for equal spacing
  },
  contentContainer: {
    flex: 1,
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
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: '5%', // Add percentage padding horizontally
    paddingTop: '5%', // Add percentage padding top
  },
  definitionContainer: {
    marginBottom: 10,
  },
  subPointsContainer: {
    marginLeft: 20,
  },
  subPoint: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 10,
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
  backButton: {
    position: 'absolute',
    top: "25%",
    left: 20,
    zIndex: 1,
  },
  keyWord: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    marginTop: "15%",
  },
  
});

export default SearchResultsScreen;
