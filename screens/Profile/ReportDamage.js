import React, { useState } from 'react';
import { View, ScrollView, TextInput, Button, Text, StyleSheet } from 'react-native';

const ReportDamage = () => {
  const [damageText, setDamageText] = useState('');
  const [submitEnabled, setSubmitEnabled] = useState(false);

  const handleDamageTextChange = (text) => {
    setDamageText(text);
    setSubmitEnabled(text.length > 0);
  };

  const handleSubmit = () => {
    // handle form submission logic here
    console.log(damageText);
    setDamageText('');
    setSubmitEnabled(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>We appreciate your input! </Text>
        <Text style={styles.subtitle}>Please provide us with details on any damage you encountered so we can address it effectively.</Text>
        <Text style={styles.title2}>Terms and Conditions</Text>
        <Text style={styles.subtitle2}>1 . Reporting Process - Report any damages to us immediately after service by contacting our customer service team with detailed information.</Text>
        <Text style={styles.subtitle2}>2 . Investigation - We will investigate reported damages and may request additional information or inspect the clothes in person for verification.</Text>
        <Text style={styles.subtitle2}>3 . Compensation - Compensation may include free dry-cleaning services based on the damage.</Text>
        <Text style={styles.subtitle2}>4 . Liability Limitation - Our liability is limited to the actual value of the garment at the time of damage, excluding any indirect or consequential damages.</Text>
        <Text style={styles.subtitle2}>5 . Exclusions - We are not liable for damages resulting from failure to follow garment care instructions or pre-existing damages to clothes.</Text>
        
        <TextInput
          placeholder="Enter Report Damage Feedback"
          value={damageText}
          onChangeText={handleDamageTextChange}
          style={styles.input}
        />
        </ScrollView>
        <View style={styles.buttonContainer}>
          <Button title="Report Damage"  onPress={handleSubmit} disabled={!submitEnabled} color="#3730a3" />
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop:10,
    paddingLeft:10,
    paddingRight:10,
    marginBottom: 5,
  },
  subtitle: {
    paddingLeft:10,
    color:'#808080',
    paddingBottom:10,
    fontSize: 14,
  },

  title2: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop:10,
    paddingLeft:10,
    paddingRight:10,
    marginBottom: 5,
  },
  subtitle2: {
    paddingLeft:10,
    paddingBottom:10,
    color:'gray',
    fontSize: 14,
  },
  input: {
    paddingLeft:10,
    paddingRight:10,
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    marginTop:25,
    padding: 10,
  },
  buttonContainer: {
    alignSelf: 'stretch',
    padding:20,
    
  }
 
});

export default ReportDamage;
