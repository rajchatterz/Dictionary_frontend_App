import { StyleSheet, Image, View, Text, FlatList } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feed from "../LakshitModule/Feed";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

export default function Favs() {
  const navigation = useNavigation();
  const fixedLength = 12;
  return (
    <View style={styles.container}>
      <View style={{flex:1,flexDirection:'row'}}>
      <AntDesign
        onPress={() => navigation.navigate("HomeScreen")}
        style={{ top: 74, right: 150 }}
        name="arrowleft"
        size={22}
        color={"black"}
      />
      <Text style={{ top: 73, fontSize: 18, right: 130, fontWeight: "900" }}>
        Favorite
      </Text>
      </View>
      <View style={{ flex:4,bottom:80}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ top: 70 }}
          data={Feed.slice(0,fixedLength)}
          renderItem={({ item }) => (
            <View style={styles.listcard}>
              <FontAwesome
                style={{ textAlign: "right", marginRight: 6, top: 3 }}
                name="heart"
                size={20}
                color={"red"}
              />
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 20,
                  left: 10,
                  bottom: 15,
                  letterSpacing: -0.28,
                  fontWeight: "bold",
                }}
              >
                {item.Interest}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  lineHeight: 15,
                  left: 10,
                  bottom: 10,
                  letterSpacing: -0.28,
                  fontWeight: "400",
                  color: "#585A5B",
                }}
              >
                {item.caption}
              </Text>
            </View>
          )}
        />
      </View>
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
  listcard: {
    backgroundColor: "white",
    width: 360,
    height: 75,
    borderRadius: 6,
    borderWidth: 0.4,
    marginBottom: 15,
    top: 20,
  },
});
