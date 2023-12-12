import { StyleSheet, Text, View,Image } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { LinearGradient } from "expo-linear-gradient";

export default function CompeteAndWin() {
  return (
    <>
      <View style={styles.containercard1}>
      <View style={styles.innercard1}>
                <Image
                  style={styles.imagecard1}
                  source={require("../../../assets/upsc.png")}
                />
                <Text style={styles.innercard1text}>
                  UPSC - Prepare for the interview
                </Text>
              </View>
              <View style={styles.itemview}>
                <LinearGradient
                  start={[0, 0]}
                  end={[0, 1]}
                  colors={["rgba(166, 120, 242, 0.2)", "rgba(79, 79, 79, 0.2)"]}
                  style={styles.lineargradient1}
                >
                  <Ionicons
                    style={{ right: 5, color: "#4F4F4F" }}
                    name="eye-outline"
                    size={20}
                  />
                  <Text
                    style={{
                      color: "#4F4F4F",
                      fontSize: 13,
                      fontWeight: "900",
                    }}
                  >
                    5.6K
                  </Text>
                </LinearGradient>
                <LinearGradient
                  start={[0, 0]}
                  end={[0, 1]}
                  colors={["rgba(166, 120, 242, 0.2)", "rgba(79, 79, 79, 0.2)"]}
                  style={styles.lineargradient2}
                >
                  <EvilIcons
                    style={{ right: 2, color: "#4F4F4F", top: 1.5 }}
                    name="calendar"
                    size={23}
                  />
                  <Text
                    style={{
                      color: "#4F4F4F",
                      fontSize: 13,
                      fontWeight: "900",
                    }}
                  >
                    1 Year Left
                  </Text>
                </LinearGradient>
              </View>
      </View>
      <View style={styles.containercard2}>
      <View style={styles.innercard1}>
                <Image
                  style={styles.imagecard1}
                  source={require("../../../assets/ssc.png")}
                />
                <Text style={styles.innercard1text}>
                  SSC - Prepare for the interview
                </Text>
              </View>
              <View style={styles.itemview}>
                <LinearGradient
                  start={[0, 0]}
                  end={[0, 1]}
                  colors={["rgba(166, 120, 242, 0.2)", "rgba(79, 79, 79, 0.2)"]}
                  style={styles.lineargradient1}
                >
                  <Ionicons
                    style={{ right: 5, color: "#4F4F4F" }}
                    name="eye-outline"
                    size={20}
                  />
                  <Text
                    style={{
                      color: "#4F4F4F",
                      fontSize: 13,
                      fontWeight: "900",
                    }}
                  >
                    5.6K
                  </Text>
                  </LinearGradient>
                  <LinearGradient
                  start={[0, 0]}
                  end={[0, 1]}
                  colors={["rgba(166, 120, 242, 0.2)", "rgba(79, 79, 79, 0.2)"]}
                  style={styles.lineargradient2}
                >
                  <EvilIcons
                    style={{ right: 2, color: "#4F4F4F", top: 1.5 }}
                    name="calendar"
                    size={23}
                  />
                  <Text
                    style={{
                      color: "#4F4F4F",
                      fontSize: 13,
                      fontWeight: "900",
                    }}
                  >
                    1 Year Left
                  </Text>
                </LinearGradient>
              </View>
      </View>
      <View style={styles.containercard3}>
      <View style={styles.innercard1}>
                <Image
                  style={styles.imagecard1}
                  source={require("../../../assets/gate.png")}
                />
                <Text style={styles.innercard1text}>
                  GATE - Prepare for the interview
                </Text>
              </View>
              <View style={styles.itemview}>
                <LinearGradient
                  start={[0, 0]}
                  end={[0, 1]}
                  colors={["rgba(166, 120, 242, 0.2)", "rgba(79, 79, 79, 0.2)"]}
                  style={styles.lineargradient1}
                >
                  <Ionicons
                    style={{ right: 5, color: "#4F4F4F" }}
                    name="eye-outline"
                    size={20}
                  />
                  <Text
                    style={{
                      color: "#4F4F4F",
                      fontSize: 13,
                      fontWeight: "900",
                    }}
                  >
                    5.6K
                  </Text>
                  </LinearGradient>
                  <LinearGradient
                  start={[0, 0]}
                  end={[0, 1]}
                  colors={["rgba(166, 120, 242, 0.2)", "rgba(79, 79, 79, 0.2)"]}
                  style={styles.lineargradient2}
                >
                  <EvilIcons
                    style={{ right: 2, color: "#4F4F4F", top: 1.5 }}
                    name="calendar"
                    size={23}
                  />
                  <Text
                    style={{
                      color: "#4F4F4F",
                      fontSize: 13,
                      fontWeight: "900",
                    }}
                  >
                    1 Year Left
                  </Text>
                </LinearGradient>
              </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    containercard1: {
        backgroundColor: "#D3EFD9",
        height: 160,
        width: 390,
        margin: 10,
        borderRadius: 7,
      },
      containercard2: {
        backgroundColor: "#FFD9D0",
        height: 160,
        width: 390,
        margin: 10,
        borderRadius: 7,
      },
      containercard3: {
        backgroundColor: "#DFE3A8",
        height: 160,
        width: 390,
        margin: 10,
        borderRadius: 7,
      },
      imagecard1: {
        width: 60,
        height: 60,
        bottom: 55,
      },
      innercard1: {
        flex: 0.6,
        alignItems: "center",
        justifyContent: "center",
        top: 65,
        backgroundColor: "white",
        width: "100%",
      },
      innercard1text: {
        color: "#263238",
        letterSpacing: -0.32,
        fontWeight: "bold",
        bottom: 40,
        fontSize: 17,
      },
      itemview: {
        flex: 0.2,
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",
        top: 30,
      },
      lineargradient1: {
        flexDirection: "row",
        left: 25,
        width: 74,
        height: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 14,
      },
      lineargradient2: {
        flexDirection: "row",
        right: 25,
        width: 109,
        height: 25,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 14,
      },
});
