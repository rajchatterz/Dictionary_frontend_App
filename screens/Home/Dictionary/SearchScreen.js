import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  TextInput,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import Feed from "../../../LakshitModule/Feed";

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
        style={styles.icon}
        name="arrowleft"
        size={22}
        color={"#49454F"}
      />
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search for Words..."
          style={styles.searchInput}
          onChangeText={(text) => setSearchTerm(text)}
          value={setWordData}
        />
        <FontAwesome
          style={styles.searchIcon}
          name="search"
          size={22}
          color={"#8E5BE4"}
          onPress={() => navigation.navigate('Substantiate')}
        />
      </View>

      <View style={styles.recentSearchContainer}>
        <Text style={styles.recentText}>Recent Searches</Text>
        <Entypo
          style={styles.backIcon}
          name="back-in-time"
          size={20}
          color={"#49454F"}
        />
      </View>

      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={filteredData}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.textPill}
            onPress={() => console.log(item.Interest)} // Add action on press
          >
            <Text>{item.Interest}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 100,
  },
  icon: {
    position: "absolute",
    left: 20,
    top: 60,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    height: 40,
    borderRadius: 10,
    paddingLeft: 15,
    marginRight: 10,
  },
  searchIcon: {
    color: "#8E5BE4",
  },
  recentSearchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 10,
  },
  backIcon: {
    marginRight: 5,
    color: "#49454F",
  },
  recentText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#49454F",
  },
  flatListContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  textPill: {
    padding: 10,
    borderWidth: 0.5,
    margin: 10,
    borderColor: "#ABABAB",
    borderRadius: 20,
    backgroundColor: "white",
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 0.8,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
});
