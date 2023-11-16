import {
  StyleSheet,
  View,
  Dimensions,
  Animated,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import Feed from "./Feed";

export default function SwipeList() {
  return (
    <View style={styles.container}>
        <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        decelerationRate="fast"
          data={Feed}
          renderItem={({ item }) => (
            <Animated.View
              style={{ height:300, width:'50%',padding:10}}
            >
                <Image style={{flex:1,height:300,width:300,resizeMode:'cover',borderRadius:20,}} source={{uri:item.imageSource2}}/>
            </Animated.View>
          )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
