import { StyleSheet, Text, View, ScrollView, Image} from "react-native";
import React from "react";
import Feed from "./Feed";

export default function CurveContainer() {
  return (
      <View style={styles.curvecontainer}>
          <ScrollView 
          showsVerticalScrollIndicator={false}
          horizontal={false}
          >
            {Feed.slice(3,12).map((item) => (
              <View key={item.id} style={styles.listcard}>
                <View
                  style={{
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      left: 10,
                      top: 20,
                      fontSize: 15,
                      fontWeight: "bold",
                    }}
                  >
                    {item.id}
                  </Text>
                  <Image
                    style={styles.cardimage}
                    source={{ uri: item.imageSource }}
                  />

                  <Text
                    style={{
                      left: 250,
                      top: 25,
                      color: "#966DDA",
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    {item.complete}
                  </Text>
                  <Text
                    style={{
                      left: 20,
                      top: 25,
                      fontSize: 15,
                      fontWeight: "900",
                    }}
                  >
                    {item.firstname}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  curvecontainer: {
    width:'200%',
    flex:1,
    alignItems:'center',
    justifyContent:'flex-end',
    backgroundColor:'white',
    borderTopLeftRadius:450,
    borderTopRightRadius:450,
    top:380,
    opacity:0.99,
    overflow:'scroll',
    position:'absolute',
  },
  listcard: {
    top:60,
    backgroundColor: "white",
    width: 360,
    height: 64,
    marginBottom: 15,
    borderRadius: 7,
    elevation: 3,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 7,
  },
  cardimage: {
    height: 46,
    width: 46,
    left: 40,
    borderRadius: 25,
    top: 10,
  },
});
