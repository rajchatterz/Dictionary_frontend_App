import { View, Text, Image } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Shadow } from "react-native-shadow-2";


const PopularCard1 = ({ cardImage, cardText, isLatest, views, timeLeft }) => {
  return (
    <Shadow distance={2} containerStyle={{ marginLeft: 1 }}>
      <View
        style={{
          width: 160,
          height: 180,
          borderBottomColor: "red",
          marginBottom: 1,
          borderRadius: 5,
        }}
      >
        {/* Image */}
        <View style={{ width: "100%", height: 97 }}>
          <Image width={"100%"} height={"100%"} source={cardImage} />
        </View>
        {/* Text */}
        <View style={{ paddingLeft: 5, paddingRight: 5, height: 83 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              paddingTop: 5,
            }}
          >
            <View>
              <Text style={{ color: "#263238", fontSize: 12 }}>
                {cardText.length > 40
                  ? cardText.substr(0, 40) + "..."
                  : cardText}
              </Text>
            </View>
            {isLatest && (
              <View
                style={{
                  padding: 4,
                  backgroundColor: "#BFF9D1",
                  borderRadius: 0.6,
                }}
              >
                <Text style={{ fontSize: 9 }}>🎉 Latest</Text>
              </View>
            )}
          </View>
          {/* Bottom Text */}
          <View
            style={{
              position: "absolute",
              bottom: 5,
              paddingLeft: 10,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {timeLeft == 0 ? (
              <Ionicons
                style={{ right: 5, color: "#263238" }}
                name="eye-outline"
                size={20}
              />
            ) : (
              <Ionicons
                style={{ right: 5, color: "#263238" }}
                name="time-outline"
                size={20}
              />
            )}
            <Text style={{ fontSize: 10, color: "#333333", fontWeight: 500 }}>
              {timeLeft == 0 ? views : timeLeft}
            </Text>
            <Text style={{ color: "#595959", fontSize: 10 }}>
              &nbsp;&nbsp;{timeLeft == 0 ? "Views" : "hours left"}
            </Text>
          </View>
        </View>
      </View>
    </Shadow>
  );
};

export default PopularCard1;
