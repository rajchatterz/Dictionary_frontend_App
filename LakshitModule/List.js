import React, { useState } from "react";
import {View,Text,ScrollView,StyleSheet, Pressable,Image,ActivityIndicator} from "react-native";
import * as Progress from "react-native-progress";
import Feed from "./Feed";

const List = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isLoading, setisLoading] = useState(false);
  return (
    <View style={styles.container}>
      <Progress.Bar
        style={{
          top: 120,
          borderRadius: 10,
        }}
        progress={0.7}
        color={"#A780E8"}
        width={277}
        borderWidth={1}
        borderColor={"#A780E8"}
        unfilledColor={"white"}
        height={12}
      />
      <Text style={styles.BarText}>Almost Done...</Text>
      <Text style={styles.questionText}>Pick Your Interest !</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.imageCardContainer}
      >
        {Feed.map((imageCard) => (
          <View key={imageCard.id} style={[styles.card, styles.cardElevation]}>
            <Image
              source={{ uri: imageCard.imageSource2 }}
              style={styles.image}
            />
            <Text style={styles.Cardtext}>{imageCard.Interest}</Text>
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
          <Text style={styles.btntxt}>Continue</Text>
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
    fontSize: 24,
    fontWeight: "900",
    lineHeight: 29.26,
    marginVertical: 20,
    paddingTop: 125,
  },
  imageCardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  Cardtext: {
    fontSize: 16,
    bottom: 30,
    color: "white",
    fontWeight: "900",
    lineHeight: 21,
    letterSpacing: -0.32,
  },
  card: {
    width: "30%",
    aspectRatio: 0.8,
    marginVertical: 6,
    borderColor: "#ddd",
    borderRadius: 10,
  },
  cardElevation: {
    shadowColor: "black",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 10,
    shadowOffset: { width: -3, height: 13 },
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  BarText: {
    top: 125,
    lineHeight: 21,
    letterSpacing: -0.32,
    alignItems: "center",
    marginRight: 165,
    fontSize: 16,
    fontWeight: "700",
    color: "#A780E8",
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
    width: "90%",
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
    width: "90%",
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

export default List;
