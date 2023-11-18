import React from "react";
import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const baseFontSize = 20; // You can adjust this value as needed

export default function CardComp1() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Pressable onPress={() => navigation.navigate('Favorite')} style={styles.cardIcon}>
          <FontAwesome
            name="heart-o"
            size={0.9375 * baseFontSize}
            color={"white"}
          />
        </Pressable>
        <Text style={styles.cardHeader}>Word Of The Day!</Text>
        <Text style={styles.cardText1}>Serendipity</Text>
        <Text style={styles.cardText2}>
          A fortunate and unexpected discovery
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  card: {
    backgroundColor: "#7D51C6",
    width: Dimensions.get('window').width * 0.9,
    height: 160,
    borderRadius: 10,
    padding: 10,
    position: "relative",
  },
  cardIcon: {
    position: "absolute",
    top: 10,
    right: 15,
  },
  cardHeader: {
    fontSize: 0.9375 * baseFontSize,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    top: 10,
    left: 20,
  },
  cardText1: {
    fontSize: 1.75 * baseFontSize,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    bottom: 40, // Adjusted to move the text to the bottom
    left: 20,
  },
  cardText2: {
    fontSize: 0.875 * baseFontSize,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    bottom: 15, // Adjusted to move the text to the bottom
    left: 20,
  },
});
