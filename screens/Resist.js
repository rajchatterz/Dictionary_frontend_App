import Feed from "../LakshitModule/Feed";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const Resist = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <AntDesign
        onPress={() => navigation.goBack()}
        style={{ top: 80, right: 180 }}
        name="arrowleft"
        size={25}
        color={"black"}
      />
      <Text style={styles.questionText}>Resist</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.imageCardContainer}
      >
        {Feed.slice(0, 4).map((imageCard) => (
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
              onPress={() => setSelectedImage(imageCard.Language)}
            >
              <Image
                source={{ uri: imageCard.imageSource }}
                style={styles.image}
              />
              {selectedImage === imageCard.Language && (
                <View style={styles.overlay} />
              )}
              <Text style={styles.badge}>{imageCard.alphabet}</Text>
            </Pressable>
            <View style={styles.imageTextContainer}>
              <Text style={styles.imageText}>{imageCard.caption}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  questionText: {
    fontSize: 24,
    fontWeight: "900",
    lineHeight: 29.26,
    marginVertical: 55,
    paddingTop: 65,
    color: "purple",
  },
  imageCardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    bottom: 20,
  },
  card: {
    width: "47%",
    aspectRatio: 0.8,
    marginVertical: 20,
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
    position: "absolute",
  },
  selectedImage: {
    borderWidth: 2,
    borderColor: "transparent",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
    backgroundColor: "rgba(106, 13, 173, 0.5)", // Customize the overlay color and opacity
    position: "absolute", // Add this line
  },
  imageTextContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#DADDEE",
    padding: 10,
    alignItems: "center",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  imageText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#381652",
  },
  badge: {
    backgroundColor: "#6A0DAD",
    color: "white",
    fontWeight: "900",
    fontSize:15,
    width: 25,
    height: 25,
    textAlignVertical: "center",
    textAlign: "center",
    borderTopLeftRadius:10
  },
});

export default Resist;
