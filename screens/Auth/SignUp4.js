import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import * as Progress from "react-native-progress";
import { RadioButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignUp4() {
  const [selectedValue, setSelectedValue] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isLoading, setisLoading] = useState(false);
  const[progress,setProgress] = useState(0.6)
  const [error,setError] = useState();
  const navigation = useNavigation();

  const options = [
    { label: "Yes , I am Preparing !", value: true },
    { label: "No , I am not Preparing !", value: false },
  ];

  const handleRadioSelect = () => {
    console.log(selectedValue)
    try{
      AsyncStorage.setItem("examAspirant",selectedValue)
      navigation.navigate("SignUp5")
      setProgress(progress+0.2)
      console.log(selectedValue,'is Selected')
    }
    catch{
      console.error('Error storing data:', error);
    }
  }

  return (
    <View style={styles.container}>
      <Progress.Bar
        style={styles.progressBar}
        progress={progress}
        color={"#A780E8"}
        width={350}
        borderWidth={1}
        borderColor={"#A780E8"}
        unfilledColor={"white"}
        height={12}
        animationType="timing"
      />
      <Text style={styles.questionText}>Preparing for any exams ?</Text>
      <Text style={styles.headtext}>Eg.  CAT , SAT , ILETS, GMAT , GRE , NMAT , MPSC , UPSC  and etc.</Text>
      <View>
        {options.map((option) => (
          <View key={option.value} style={styles.RadioContainer}>
            <RadioButton
              value={option.value}
              uncheckedColor="#cccc"
              color="#7352AC"
              status={selectedValue === option.value ? "checked" : "unchecked"}
              onPress={() => setSelectedValue(option.value)}
            />
            <Text style={styles.RadioText}>{option.label}</Text>
          </View>
        ))}
        <Pressable
              style={isLoading ? styles.disabledButton : styles.button}
              isDisabled={isLoading || isButtonDisabled}
              isLoadingText="verifying OTP"
              onPress={handleRadioSelect}
            >
              {isLoading ? (
                <View style={styles.buttonContent} >
                  <ActivityIndicator color="white" size="small" />
                  <Text style={styles.spinnerText}>Verifying</Text>
                </View>
              ) : (
                <Text style={styles.btntxt}>Next</Text>
              )}
            </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'white'
  },
  progressBar: {
    bottom:130,
    borderRadius: 10,
  },
  questionText: {
    fontSize: 24,
    fontWeight: "900",
    lineHeight: 29.26,
    marginVertical: 40,
    bottom:115
  },
  headtext:{
   fontSize:20,
   fontWeight:'900',
   lineHeight:21,
   letterSpacing:-0.32,
   color:'#A09D9D',
   bottom:140,
   height:75,
   width:'55%'
  },
  RadioContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 15,
    bottom:110,
    height: 60,
    width: 330,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(0, 1, 0, 1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  RadioText: {
    fontSize: 20,
    fontWeight: "900",
    lineHeight: 21,
    letterSpacing: -0.32,
    textAlign: "center",
    color:'#7352AC',
    marginLeft:40,
  },
  button: {
    backgroundColor: "#6A0DAD",
    height: 50,
    top:165,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0, 1, 0, 1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 }
  },
  btntxt: {
    fontSize: 20,
    fontWeight: "900",
    color: "white",
  },
  spinnerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },
  disabledButton: {
    backgroundColor: '#9B68B2',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
