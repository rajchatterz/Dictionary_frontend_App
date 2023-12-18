import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Pressable,
  Image,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Plans() {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

  const handleCheckboxChange = (checkboxNumber) => {
    if (checkboxNumber === 1) {
      setCheckbox1(true);
      setCheckbox2(false);
    } else if (checkboxNumber === 2) {
      setCheckbox1(false);
      setCheckbox2(true);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.headcontainer}>
        <AntDesign
          name="arrowleft"
          size={22}
          color={"black"}
          style={{ right: 100 }}
        />
        <Text style={styles.headtext}>Choose Your Plan</Text>
        <View>
          <Image style={styles.image} source={require("../assets/plans.png")} />
        </View>
      </View>
      <TouchableOpacity style={styles.groupcontainer1}>
        <BouncyCheckbox
          size={25}
          fillColor="#80CAC9"
          unfillColor="#FFFFFF"
          isChecked={checkbox1}
          onValueChange={(isChecked) => setChecked(isChecked)}
          style={{ top: 20, left: 10 }}
        />
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "center",
            bottom: 15,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#3A1155",
              fontWeight: "bold",
              left: 50,
              lineHeight: 30,
              letterSpacing: -0.28,
            }}
          >
            Free (Basic)
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#3A1155",
              left: 50,
              letterSpacing: -0.28,
            }}
          >
            Don't even try pro
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.groupcontainer2}>
        <BouncyCheckbox
          size={25}
          fillColor="#80CAC9"
          unfillColor="#FFFFFF"
          isChecked={checkbox2}
          onValueChange={(isChecked) => setChecked(isChecked)}
          style={{ flex: 1, alignItems: "center", left: 10, top: 50 }}
        />
        <View style={styles.popular}>
          <Text style={{ fontSize: 14, fontWeight: "900", color: "white" }}>
            POPULAR
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "center",
            bottom: 85,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#3A1155",
              fontWeight: "bold",
              left: 50,
              lineHeight: 30,
              letterSpacing: -0.28,
            }}
          >
            Free
          </Text>
          <Text
            style={{
              fontSize: 17,
              color: "#3A1155",
              left: 50,
              letterSpacing: -0.28,
            }}
          >
            Just @ Rs.49 /-{" "}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#3A1155",
              left: 50,
              letterSpacing: -0.28,
            }}
          >
            A : Switch to basic (always free){" "}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#3A1155",
              left: 50,
              letterSpacing: -0.28,
            }}
          >
            B : Interview Preparation
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#3A1155",
              left: 50,
              letterSpacing: -0.28,
            }}
          >
            C : Improve Business communication{" "}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#3A1155",
              left: 50,
              letterSpacing: -0.28,
              width: "75%",
            }}
          >
            D : Get Word List for CAT, MPSC , SAT , UPSE , ILETS , GRE , GMAT &
            other
          </Text>
        </View>
        <Text
          style={{
            fontSize: 14,
            color: "#3A1155",
            textAlign: "right",
            fontWeight: "bold",
            right: 20,
            bottom: 20,
          }}
        >
          *Billed monthly
        </Text>
      </TouchableOpacity>
      <Pressable onPress={() => console.log("Continue")} style={styles.button}>
        <Text style={styles.btntxt}>Continue</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  headtext: {
    fontSize: 20,
    color: "#3A1155",
    fontWeight: "900",
    top: 20,
    left: 20,
  },
  headcontainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    top: 80,
  },
  image: {
    width: 200,
    height: 200,
    top: 50,
  },
  groupcontainer1: {
    width: "80%",
    backgroundColor: "white",
    height: 64,
    margin: 20,
    bottom: 100,
    borderRadius: 7,
    shadowColor: "rgba(0, 1, 0, 1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  groupcontainer2: {
    width: "80%",
    backgroundColor: "white",
    height: 224,
    bottom: 100,
    borderRadius: 7,
    shadowColor: "rgba(0, 1, 0, 1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  button: {
    backgroundColor: "#6A0DAD",
    height: 50,
    width: "90%",
    marginTop: 40,
    bottom: 30,
    borderRadius: 27,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0, 1, 0, 1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  btntxt: {
    fontSize: 20,
    fontWeight: "900",
    color: "white",
  },
  popular: {
    bottom: 86,
    width: 91,
    height: 33,
    alignItems: "center",
    justifyContent: "center",
    left: 248,
    backgroundColor: "#32BDD2",
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 4,
  },
});
