import { StyleSheet, Text, View, Image,Dimensions} from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function CardComp1() {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.cardcontainer}>
        <View style={styles.card}>
          <View style={styles.imagecard}>
            <Image
              style={styles.image}
              source={require("../../assets/wave2.png")}
            />
          </View>
          <FontAwesome
            name="heart-o"
            size={20}
            color={"white"}
            style={styles.cardicon}
          />
          <Text style={styles.cardheader}>Word Of The Day !</Text>
          <Text style={styles.cardtext1}>Serendipity</Text>
          <Text style={styles.cardtext2}>
            A fortunate and unexpected discovery{" "}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardcontainer: {
    flex: 1,
    alignItems: "center",
  },
  card: {
    backgroundColor: "#7D51C6",
    width:Dimensions.get('screen').width*0.9,
    height: 160,
    borderRadius:10,
    padding: 10,
    top:20
  },
  imagecard: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    top: 10,
    left: 10,
  },
  image: {
    width: "100%",
    height: 160,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  cardicon: {
    marginLeft: "92%",
    top: 15,
    position: "absolute",
  },
  cardheader: {
    fontWeight: "900",
    height: 28,
    width: 186,
    fontSize: 20,
    top: 10,
    left: 17,
    color: "white",
    position: "absolute",
    lineHeight: 24.38,
    letterSpacing: -0.32,
  },
  cardtext1: {
    position: "absolute",
    top: 60,
    fontSize: 32,
    left: 17,
    color: "white",
    fontWeight: "900",
    lineHeight: 39.01,
    letterSpacing: -0.32,
  },
  cardtext2: {
    position: "absolute",
    top: 100,
    left: 17,
    color: "white",
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 19.5,
    letterSpacing: -0.32,
  },
});
