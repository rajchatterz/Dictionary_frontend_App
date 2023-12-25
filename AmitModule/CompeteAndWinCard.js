import { View, Text, Image } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Shadow } from "react-native-shadow-2";

const CompeteAndWinCard = ({
  cardTitle1,
  cardTitle2,
  type,
  users,
  cardLogo,
  backgroundId,
}) => {
  return (
    <Shadow
      distance={1}
      containerStyle={{ marginLeft: 3 }}
      sides={{ start: false, top: false, end: false, bottom: true }}
      corners={{
        topStart: false,
        topEnd: false,
        bottomEnd: true,
        bottomStart: true,
      }}
    >
      <View
        style={{
          width: 160,
          height: 157,
          // backgroundColor: "red",
          marginBottom: 1,
          borderRadius: 7,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Logo */}
        <View style={{ position: "absolute", zIndex: 1, top: 10, left: 10 }}>
          <Image style={{ width: 60, height: 60 }} source={cardLogo} />
        </View>
        {/* Image */}
        <View style={{ width: "100%", height: 52 }}>
          <Image
            width={"100%"}
            height={"100%"}
            source={
              backgroundId % 2 == 0
                ? require("../assets/CompeteWinBg1.png")
                : require("../assets/CompeteWinBg2.png")
            }
          />
        </View>
        {/* Text */}
        <View
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            position: "relative",
            height: 105,
          }}
        >
          <View style={{ paddingTop: 22 }}>
            <Text style={{ fontSize: 12, color: "#263238" }}>{cardTitle1}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 10, color: "#595959" }}>{cardTitle2}</Text>
          </View>
          <View
            style={{ flexDirection: "row", marginTop: 5, alignItems: "center" }}
          >
            <Text>
              <Ionicons
                style={{ right: 5, color: "#263238" }}
                name="location-outline"
                size={10}
              />
            </Text>
            <Text style={{ fontSize: 9, color: "#595959" }}>{type}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              position: "absolute",
              bottom: 0,
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 5,
              gap: 3,
            }}
          >
            <View>
              <Text>
                <AntDesign
                  style={{ right: 5, color: "#263238" }}
                  name="addusergroup"
                  size={15}
                />
              </Text>
            </View>
            <View style={{ flexDirection: "row", gap: 4 }}>
              <Text style={{ fontSize: 10, fontWeight: 500 }}>{users}</Text>
              <Text style={{ fontSize: 10 }}>Attempted</Text>
            </View>
          </View>
        </View>
      </View>
    </Shadow>
  );
};

export default CompeteAndWinCard;
