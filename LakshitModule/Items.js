import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Image,
  ActivityIndicator
} from "react-native";
import Feed from "./Feed";
import * as Progress from 'react-native-progress'

const MyPage = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isLoading, setisLoading] = useState(false);

  return (
    <View style={styles.container}>
        <Progress.Bar style={{
        top:100,
        borderRadius:10,
      }} 
        progress={0.2} 
        color={'#A780E8'}
        width={350}
        borderWidth={1}
        borderColor={'#A780E8'}
        unfilledColor={'white'}
        height={15}
         />

      <Text style={styles.questionText}>Your Native Language ?</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.imageCardContainer}
      >
        {Feed.map((imageCard) => (
          <View key={imageCard.id} style={styles.card}>
            <Image
              source={{ uri: imageCard.imageSource }}
              style={styles.image}
            />
            <Text style={styles.Cardtext}>{imageCard.Language}</Text>
          </View>
        ))}
      </ScrollView>
      <Pressable
        style={isLoading ? styles.disabledButton : styles.button}
        isDisabled={isLoading || isButtonDisabled}
        isLoadingText="verifying"
      >
        {isLoading ? (
          <View style={styles.buttonContent}>
            <ActivityIndicator color="white" size="small" />
            <Text style={styles.spinnerText}>Verifying</Text>
          </View>
        ) : (
          <Text style={styles.btntxt}>Next</Text>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 20,
    paddingTop: 130,
  },
  imageCardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "30%",
    aspectRatio: 0.67,
    marginVertical: 6,
    borderRadius: 5,
  },
  image: {
    flex:1,
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  Cardtext: {
    fontSize: 16,
    fontWeight: "900",
    bottom: 30,
    marginLeft: 25,
    color: "#ffff",
  },
  btntxt: {
    fontSize: 20,
    fontWeight: "900",
    color: "white",
  },
  spinnerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginLeft: 10,
  },
  disabledButton: {
    backgroundColor: "#9B68B2",
    height: 50,
    width: "70%",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    bottom: 20,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#6A0DAD",
    height: 50,
    width: "70%",
    marginTop: 40,
    bottom: 20,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0, 1, 0, 1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
});

export default MyPage;
