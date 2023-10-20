import Feed from "../../LakshitModule/Feed";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Image,
  ActivityIndicator,
} from "react-native";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const SignUp3 = () => {

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Progress.Bar
        style={styles.progressBar}
        progress={0.2}
        color={"#A780E8"}
        width={277}
        borderWidth={1}
        borderColor={"#A780E8"}
        unfilledColor={"white"}
        height={12}
      />

      <Text style={styles.questionText}>Your Native Language?</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.imageCardContainer}
      >
        {Feed.slice(0, 9).map((imageCard) => (
          <View
            key={imageCard.id}
            style={[
              styles.card,
              styles.cardElevation,
              selectedImage === imageCard.id && styles.selectedImage,
            ]}
          >
            <Pressable
              style={styles.imageContainer}
              onPress={() => setSelectedImage(imageCard.id)}
            >
              <Image source={{ uri: imageCard.imageSource }} style={styles.image} />
              {selectedImage === imageCard.id && <View style={styles.overlay} />}
            </Pressable>
            <View style={styles.imageTextContainer}>
              <Text style={styles.imageText}>{imageCard.Interest}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <Pressable
        style={isLoading ? styles.disabledButton : styles.button}
        disabled={isLoading || isButtonDisabled}
        onPress={() => navigation.navigate("SignUp5")}
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
  progressBar: {
    top: 120,
    borderRadius: 10,
  },
  questionText: {
    fontSize: 24,
    fontWeight: "900",
    lineHeight: 29.26,
    marginVertical: 40,
    paddingTop: 130,
  },
  imageCardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "30%",
    aspectRatio: 0.8,
    marginVertical: 6,
    borderColor: "#ddd",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 10,
    shadowOffset: { width: -3, height: 13 },
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  selectedImage: {
    borderWidth: 2,
    borderColor: "transparent",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius:10,
    backgroundColor: "rgba(106, 13, 173, 0.5)", // Customize the overlay color and opacity
    position: "absolute", // Add this line
  },
  imageTextContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    padding: 5,
    alignItems: "center",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  imageText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
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

export default SignUp3;
