import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Help = () => {
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);

  return (
    <View style={styles.container}>
          <Text style={styles.heading}>Frequently Asked Questions</Text>
      <Card
        title="How do I create an account?"
        onPress={() => setQuestion1(!question1)}
        showAnswer={question1}
        answer="To create an account, click on the 'Sign Up' button and follow the prompts to enter your information."
      />
      <Card
        title="What is your return policy?"
        onPress={() => setQuestion2(!question2)}
        showAnswer={question2}
        answer="Our return policy is 30 days from the date of purchase. Please contact customer service for more information."
      />
      <Card
        title="How do I reset my password?"
        onPress={() => setQuestion3(!question3)}
        showAnswer={question3}
        answer="To reset your password, click on the 'Forgot Password' button and follow the prompts to reset your password."
      />
    </View>
  );
};

const Card = ({ title, onPress, showAnswer, answer }) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.cardHeader} onPress={onPress}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Ionicons name={showAnswer ? 'chevron-up-outline' : 'chevron-forward-outline'} size={24} color="#3730a3" />
      </TouchableOpacity>
      {showAnswer && <Text style={styles.cardAnswer}>{answer}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight:20,
    paddingTop:10,
  

  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop:15,
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginBottom: 10,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
   
  },
  cardAnswer: {
    marginTop: 15,
  },
});

export default Help;
