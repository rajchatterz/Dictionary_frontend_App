import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Expo's icon component
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';

const SearchResultsScreen = ({ route }) => {

    const navigation = useNavigation();

    const [searchTerm, setSearchTerm] = useState('');
    const [wordData, setWordData] = useState(null);
    const [suggestions, setSuggestions] = useState([]);
    const [suggestionsVisible, setSuggestionsVisible] = useState(false); // New state for managing suggestion card visibility

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleSearch = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
            const data = await response.json();
        
            if (data && Array.isArray(data) && data.length > 0) {
                navigation.navigate('SearchResults', { searchResults: data });
            } else {
                // Show the slide-in and slide-up alert
                console.log("Word not found")
                setSlideAlertMessage('Sorry, we couldn\'t find definitions for the word you were looking for.');
            }
            } catch (error) {
            console.error('Error fetching data:', error);
            } finally {
            setLoading(false);
            }
        };
    
      const handleSuggestionSelect = (selectedSuggestion) => {
            console.log(selectedSuggestion)
            setSearchTerm(selectedSuggestion);
            setSuggestions([]);
            setSuggestionsVisible(false);
      };
    
      const handleInputChange = (text) => {
            setSearchTerm(text);
        
            if (text.length >= 2) {
            // Filter suggestions based on the predefined word list
            const filteredSuggestions = predefinedWordList.filter(
                (word) => word.toLowerCase().includes(text.toLowerCase())
            );
        
            setSuggestions(filteredSuggestions);
            setSuggestionsVisible(true);
            } else {
            setSuggestions([]); // Clear suggestions if less than 2 letters
            setSuggestionsVisible(false);
            }
      };

    return (
        <View style={styles.container}>
            <View style={styles.blueBackground}>
                <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>

                <View style={styles.searchContainer} >
                    <TextInput
                        style={styles.input}
                        placeholder="Search from 17,00,000+"
                        value={searchTerm}
                        onChangeText={handleInputChange}
                        onFocus={() => setSuggestionsVisible(true)} // Show suggestions on focus
                        onBlur={() => setSuggestionsVisible(false)} // Hide suggestions on blur
                    />
                        <Ionicons
                            name="search"
                            size={26}
                            color="#007AFF"
                        //onPress={handleSearch}
                        />
                 

                </View>

            </View>
            <ScrollView style={styles.scrollContainer}>
  {/*
  Rendering the list of suggestions with updated styling
*/}
      {suggestionsVisible && suggestions.length > 0 && (
        <View style={styles.suggestionsContainer}>
          <Text style={styles.suggestionsTitle}>Suggestions:</Text>
          <FlatList
            data={suggestions}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleSuggestionSelect(item)} // Handle suggestion selection
                style={styles.suggestionItemContainer} // Apply the suggestion item style
              >
                <Text style={styles.suggestionItemText}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item}
            contentContainerStyle={styles.suggestionsList}
          />
        </View>
      )}


      {wordData && (
        <View style={styles.wordDetailsContainer}>
          <Text style={styles.wordTitle}>{wordData[0].word}</Text>
          <Text style={styles.phonetic}>{wordData[0].phonetic}</Text>
          <FlatList
            data={wordData[0].meanings}
            renderItem={({ item }) => (
              <View style={styles.meaningContainer}>
                <Text style={styles.partOfSpeech}>{item.partOfSpeech}</Text>
                {item.definitions.map((definition, index) => (
                  <Text key={index} style={styles.definition}>
                    {definition.definition}
                  </Text>
                ))}
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.meaningsList}
          />
        </View>
      )}
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
        height: 140,
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
  
    scrollContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: '5%', // Add percentage padding horizontally
        paddingTop: '5%', // Add percentage padding top
    },
    definitionContainer: {
        marginBottom: 10,
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
   
    backButton: {
        position: 'absolute',
        marginTop: "1%", // 10% of window height
        left: 20,
        zIndex: 1,
    },
    keyWord: {
        fontSize: 48,
        fontWeight: 'bold',
        color: 'white',
        marginTop: "15%",
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff', // Set background color to blue
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginTop: "5%", // 10% of window height
        marginLeft: '20%', // 5% of window width
        marginRight: '5%', // 5% of window width
        position: 'absolute', // Position it fixed at the top
       
        zIndex: 1,
      },
      scrollView: {
        flex: 1,
        paddingHorizontal: "2%",
        marginTop: "2%", // Adjust the marginTop to provide space for the fixed blue background and search bar
        marginBottom: 20, // Add margin at the bottom to prevent cards from being hidden behind the bottom navigation
      },
      input: {
        flex: 1,
        paddingVertical: 8,
        fontSize: 20,
        color: '#333',
      },
      suggestionsContainer: {
        marginTop: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
      },
      suggestionsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      suggestionsList: {
        marginTop: 5,
      },
      suggestionItemContainer: {
        borderBottomWidth: 1, // Add a line between each suggestion
        borderBottomColor: '#ccc',
        paddingVertical: 8,
      },
      suggestionItemText: {
        fontSize: 18, // Increase the font size
        color: '#333',
      },
      wordDetailsContainer: {
        marginTop: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
      },
      wordTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      phonetic: {
        fontSize: 16,
        color: '#555',
      },
      meaningContainer: {
        marginBottom: 10,
      },

});

export default SearchResultsScreen;
