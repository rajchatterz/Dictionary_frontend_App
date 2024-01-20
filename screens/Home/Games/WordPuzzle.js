import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Circle } from 'react-native-progress';
import { SafeAreaView } from 'react-native-safe-area-context';

const WordPuzzle = () => {
  const words = ['apple', 'banana', 'orange', 'grape', 'kiwi', 'mango', 'pear', 'melon'];
  const [selectedWord, setSelectedWord] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [correctGuessCount, setCorrectGuessCount] = useState(0);
  const [animation] = useState(new Animated.Value(0));

  const handleCheckButtonPress = () => {
    // Check if the selected word forms a valid word
    if (words.includes(selectedWord)) {
      // Correct guess, show animation, update feedback, and increment the correct guess counter
      setFeedbackMessage('Correct!');
      playAnimation();
      setCorrectGuessCount(correctGuessCount + 1);
    } else {
      // Incorrect guess, update feedback message
      setFeedbackMessage('Incorrect. Try again!');
    }

    // Reset selected word after a guess
    setSelectedWord('');

    // Reset feedback message after a short duration
    const timer = setTimeout(() => {
      setFeedbackMessage('');
    }, 1500);

    return () => clearTimeout(timer);
  };

  const playAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      // Reset animation value after completion
      animation.setValue(0);
    });
  };

  const handleButtonClick = (letter) => {
    // Add the pressed letter to the selected word
    setSelectedWord(selectedWord + letter);
  };

  const handleBackspaceButtonPress = () => {
    // Remove the last letter from the selected word
    setSelectedWord(selectedWord.slice(0, -1));
  };

  const handleSubmitButtonPress = () => {
    // Handle the submission of the word (you can implement your logic here)
    console.log('Submitted word:', selectedWord);
  };

  const renderButtons = () => {
    const letters = ['a', 'r', 'g', 'k', 'e', 'o', 'n', 'l'];
    return letters.map((letter, index) => (
      <TouchableOpacity
        key={index}
        style={styles.button}
        onPress={() => handleButtonClick(letter)}
      >
        <Text>{letter}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
  
              <Circle
          size={200}
          progress={correctGuessCount / 10}
          showsText
          formatText={() => `${correctGuessCount}/10`}
                  thickness={3}
          color="#03041a"
        />

      </View>
      <View style={styles.bottomView}>
        <View style={styles.bottomTopView}>
                  <Text style={{textAlign:'center',fontSize:20,fontWeight:'800'}}>{ selectedWord}</Text>
        </View>
        <View style={styles.buttonView}>
          {/* Wrap buttons using flexWrap */}
          <View style={styles.buttonContainer}>
            {renderButtons()}
          </View>
          {/* Backspace and Submit buttons */}
          <View style={styles.controlButtonsContainer}>
            <TouchableOpacity
              style={styles.controlButton}
              onPress={handleBackspaceButtonPress}
            >
              <Text>Backspace</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.controlButton}
              onPress={handleCheckButtonPress}
            >
              <Text>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6A0DAD',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    margin: 5,
    padding: 10,
    width: 70,
    height: 70,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  controlButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  controlButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  },
  checkButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  feedbackContainer: {
    marginTop: 20,
  },
  feedbackText: {
    fontSize: 18,
    color: 'green',
  },
  animationContainer: {
    position: 'absolute',
    top: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animationText: {
    fontSize: 20,
    color: 'green',
  },
  topView: {
    flex: 1,
  },
  bottomView: {
    flex: 1.1,
    width: '87%',
    borderRadius: 20,
    backgroundColor: 'white',
    marginVertical: 100,
  },
  bottomTopView: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonView: {
    flex: 3,
    padding: 10,
  },
});

export default WordPuzzle;
