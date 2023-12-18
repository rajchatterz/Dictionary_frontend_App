import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import {
  Entypo,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import feed from "./Feed";

export default function NewNotify() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <FontAwesome style={{ right: 80 }} onPress={()=>console.log("clicked")} name="bars" size={25} />
        <Text style={styles.notification}>Notifications</Text>
        <MaterialCommunityIcons
          style={styles.delete}
          name="delete-circle"
          size={40}
          onPress={()=>console.log("clicked")}
        />
      </View>
      <FlatList
        enableEmptySections={true}
        data={feed.slice(0, 6)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationBox}>
            <View style={styles.content}>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <View style={styles.iconbackground}>
                  <MaterialCommunityIcons onPress={()=>console.log("clicked")} style={{top:17}} size={25} name={item.icon} color={item.iconcolor} />
                  <Entypo size={25} onPress={()=>console.log("clicked")} style={{bottom:17}} name={item.iconcross} color={item.iconcolor} />
                  </View>
                  <Text style={styles.description}>{item.caption}</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-around",
    flexDirection: "row",
    top: 80,
  },
  notification: {
    fontSize: 25,
    fontWeight: "900",
    top: 50,
    right: 105,
  },
  delete: {
    color: "#4CB9E7",
    top: 50,
    left: 80,
  },
  notificationBox: {
    padding: 10,
    marginTop: 15,
    marginBottom: 5,
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 10,
    shadowColor: "rgba(0, 1, 0, 1)",
    shadowOpacity: 0.8,
    elevation: 1,
    shadowRadius: 10,
    shadowOffset: { width: 1, height: 13 },
  },
  icon: {
    marginTop: 5,
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  description: {
    fontSize: 18,
    fontWeight: "normal",
    left: 20,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  iconbackground:
  {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: '#ADC4CE',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
