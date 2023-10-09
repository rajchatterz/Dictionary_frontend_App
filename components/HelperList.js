import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    ImageBackground,
  } from "react-native";
  import React from "react";
  import { AntDesign } from "@expo/vector-icons";
  import { MaterialIcons } from "@expo/vector-icons";
  import { MaterialCommunityIcons } from "@expo/vector-icons";
  import { useNavigation } from "@react-navigation/native";
  
  const MenuItem = ({ item }) => {
    const navigation = useNavigation();
    return (
      <View style={{ margin: 10 , padding:3 }}>
        <Pressable
          onPress={() =>
            navigation.navigate("Menu", {
              id: item.id,
              name:item.name,
              image:item.image,
              rating:item.rating,
              time:item.time,
              adress:item.adress,
              cost_for_two:item.cost_for_two,
              cuisines:item.cuisines,
              menu:item.menu,
            })
          }
          style={{ flexDirection: "row" }}
        >
          <View>
            <ImageBackground
              imageStyle={{ borderRadius: 50 }}
              style={{ aspectRatio: 5 / 5, height: 100 }}
              source={{ uri: item.image }}
            >
            
            </ImageBackground>
          </View>
  
          <View style={{ marginLeft: 10 , padding:3 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Rohan rajest</Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}
            >
              <MaterialIcons name="stars" size={24} color="green" />
              <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>
                Do somthing
              </Text>
              <Text style={{ marginLeft: 3 }}>2mins•</Text>
              <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>
                mins
              </Text>
            </View>
  
            <Text style={{ fontSize: 16, color: "gray", marginTop: 6 }}>
              Address
            </Text>
  
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <View
                style={{
                  backgroundColor: "#FFB6C1",
                  width: 22,
  
                  height: 22,
                  borderRadius: 11,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 13,
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  ₹
                </Text>
              </View>
  
              <Text
                style={{
                  marginTop: 5,
                  marginLeft: 4,
                  fontSize: 16,
                  fontWeight: "500",
                }}
              >
                 for two
              </Text>
            </View>
            
          </View>
        </Pressable>
      </View>
    );
  };
  
  export default MenuItem;
  
  const styles = StyleSheet.create({});
  