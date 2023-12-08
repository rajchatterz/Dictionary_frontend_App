import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function CardComp2() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.headtext1}>Compete and Win</Text>

        {/* Continue your Learning */}
        <ScrollView horizontal contentContainerStyle={{ margin: 9 }}>
          <TouchableOpacity>
            <View style={styles.containercard1}>
              <View style={styles.innercard1}>
              <Image style={styles.imagecard1} source={require('../../assets/upsc.png')}/>
                <Text style={styles.innercard1text}>UPSC - Prepare for the interview</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
      {/* Continue your Learning End... */}

      {/* Play annd Progress Card */}
      <View style={styles.container3}>
        <Text style={styles.headtext2}>Play and Progress</Text>
        <ScrollView horizontal contentContainerStyle={{ margin: 9 }}>
          <TouchableOpacity>
            <View style={styles.containercard2}>
              <View style={styles.innercard2}>
                <Image
                  style={{ width: 81, height: 77 }}
                  source={require("../../assets/Rectangle2.png")}
                />
                <Text
                  style={{
                    color: "#F24E1E",
                    fontSize: 20,
                    fontWeight: "900",
                    top: 5,
                    left: 5,
                  }}
                >
                  Guess
                </Text>
                <Image
                  style={{ height: 20, width: 20, right: 40, bottom: 17 }}
                  source={require("../../assets/Vector2.png")}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#ADB4E8",
                height: 140,
                width: 125,
                margin: 10,
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <Image
                  style={{ width: 81, height: 77 }}
                  source={require("../../assets/Rectangle1.png")}
                />
                <Text
                  style={{
                    color: "#7781D4",
                    fontSize: 20,
                    fontWeight: "900",
                    top: 5,
                    left: 5,
                  }}
                >
                  Writee
                </Text>
                <Image
                  style={{ height: 20, width: 20, right: 40, bottom: 17 }}
                  source={require("../../assets/Vector1.png")}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#F3B69B",
                height: 140,
                width: 125,
                margin: 10,
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <Image
                  style={{ width: 81, height: 77 }}
                  source={require("../../assets/Rectangle2.png")}
                />
                <Text
                  style={{
                    color: "#F24E1E",
                    fontSize: 20,
                    fontWeight: "900",
                    top: 5,
                    left: 5,
                  }}
                >
                  Guess
                </Text>
                <Image
                  style={{ height: 20, width: 20, right: 40, bottom: 17 }}
                  source={require("../../assets/Vector2.png")}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#ADB4E8",
                height: 140,
                width: 125,
                margin: 10,
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <Image
                  style={{ width: 81, height: 77 }}
                  source={require("../../assets/Rectangle1.png")}
                />
                <Text
                  style={{
                    color: "#7781D4",
                    fontSize: 20,
                    fontWeight: "900",
                    top: 5,
                    left: 5,
                  }}
                >
                  Writee
                </Text>
                <Image
                  style={{ height: 20, width: 20, right: 40, bottom: 17 }}
                  source={require("../../assets/Vector1.png")}
                />
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
      {/* Play annd Progress Card End.... */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 0.9,
    alignItems: "center",
    justifyContent: "center",
    top: 45,
  },
  container3: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
    top: 45,
  },
  headtext1: {
    fontSize: 24,
    right: 90,
    fontWeight: "900",
    color: "#263238",
    opacity: 0.7,
  },
  headtext2: {
    fontSize: 24,
    right: 80,
    fontWeight: "900",
    color: "#263238",
    opacity: 0.7,
  },
  containercard1: {
    backgroundColor: "#D3EFD9",
    height: 160,
    width: 390,
    margin: 10,
    borderRadius: 7,
  },
  imagecard1:{
    width:60,
    height:60,
    bottom:55
  },
  innercard1: {
    flex: .6,
    alignItems: "center",
    justifyContent: "center",
    top:65,
    backgroundColor:'white',
    width:'95%',
  },
  innercard1text:{
    color:'#263238',
    letterSpacing:-0.32,
    fontWeight:'bold',
    bottom:40
  },
  containercard2: {
    backgroundColor: "#F3B69B",
    height: 140,
    width: 125,
    margin: 10,
    borderRadius: 10,
  },
  innercard2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    top: 10,
  },
});
