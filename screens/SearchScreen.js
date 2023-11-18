import {
  Dimensions,
  StyleSheet,
  TextInput,
  View,
  Text,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import Feed from "../LakshitModule/Feed";

export default function SearchSection() {
  const navigation = useNavigation();

  const [searchTerm, setSearchTerm] = useState("");
  const [wordData, setWordData] = useState(Feed);

  const filteredData = Feed.filter((item) =>
    item.Interest.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
         <AntDesign
        onPress={() => navigation.navigate("HomeScreen")}
        style={{ right: 195, top: 100 }}
        name="arrowleft"
        size={22}
        color={"#49454F"}
      />
      <TextInput
        placeholder="Search for Words......"
        style={[styles.searchbar, styles.searchbarshadow]}
        onChangeText={(text) => setSearchTerm(text)}
        value={setWordData}
      />
      <FontAwesome
        style={{ right: 140, top: 77 }}
        name="search"
        size={22}
        color={"#8E5BE4"}
        onPress={()=>navigation.navigate('Substantiate')}
      />
   
      <View style={{top:100}}>
        <Text style={styles.recenttext}>Recent Searches</Text>
        <Entypo
          style={{ right: 140, bottom: 20 }}
          name="back-in-time"
          size={20}
          color={"#49454F"}
        />
        </View>
      <View style={{top:90}}>
        <FlatList
          contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap"}}
          data={filteredData}
          renderItem={({ item }) => (
            <View style={styles.textpill}>
              <Text>{item.Interest}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor:'white'
  },
  searchbar: {
    backgroundColor: "white",
    width: Dimensions.get("screen").width * 0.85,
    height: 43,
    borderRadius: 10,
    paddingLeft: 50,
    position: "absolute",
    right: 20,
    top:90
  },
  searchbarshadow: {
    shadowColor: "black",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 10,
    shadowOffset: { width: -3, height: 13 },
  },
  recenttext: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19.5,
    letterSpacing: -0.32,
    right:110
  },
  textpill: {
    padding: 10,
    borderWidth: 0.4,
    margin: 10,
    borderColor: "#ABABAB",
    borderRadius: 20,
    shadowColor: "black",
    shadowOpacity: 0.8,
    elevation:3,
    shadowRadius: 20,
    shadowOffset: { width: 4, height: 4},
    backgroundColor:'white'
  },
});
