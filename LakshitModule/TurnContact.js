import React, { useRef, useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
  Image,
  Pressable,
} from "react-native";

const TurnContact = () => {
  const [sheetVisible, setSheetVisible] = useState(false);

  const bottomSheetHeight = 500; // Set your desired height here
  const translateY = useRef(new Animated.Value(bottomSheetHeight)).current;
  useEffect(() => {
    toggleBottomSheet();
  }, []);
  const toggleBottomSheet = () => {
    Animated.timing(translateY, {
      toValue: sheetVisible ? bottomSheetHeight : 0,
      duration: 500,
      useNativeDriver: false, // You need to set this to false for Android
    }).start();

    setSheetVisible(!sheetVisible);
  };

  return (
    <View style={styles.container}>
      {/* Bottom sheet */}
      <Animated.View
        style={[
          styles.bottomSheetContainer,
          { transform: [{ translateY: translateY }] },
        ]}
      >
        <View style={styles.mainContent}>
          <Image
            style={{ height: 150, width: 150, bottom: 80 }}
            source={require("../assets/book.png")}
          />
          <Text style={{ fontSize: 20, fontWeight: "900", bottom: 50,letterSpacing:-0.32 }}>
             Allow access to contacts
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "normal",
              letterSpacing: -0.28,
              bottom: 30,
              lineHeight: 20,
            }}
          >
            You will be able to have delightful experiences while using app.
          </Text>
          <Pressable
            onPress={() => console.log("Continue")}
            style={styles.button}
          >
            <Text style={styles.btntxt}>Continue</Text>
          </Pressable>
          <TouchableOpacity onPress={toggleBottomSheet}>
            <Text style={{ fontSize: 20, fontWeight: "900", top: 10,letterSpacing:-0.32,left:5 }}>Maybe Later</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 50,
  },
  bottomSheetContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 500,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    elevation: 5, // For Android shadow
    shadowOffset: { width: 0, height: -3 },
    shadowRadius: 15,
    shadowColor: "rgba(0, 1, 0, 1)",
    shadowOpacity: 0.8,
  },
  button: {
    backgroundColor: "#6A0DAD",
    height: 50,
    width: "90%",
    marginTop: 60,
    bottom: 30,
    borderRadius: 27,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0, 1, 0, 1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  btntxt: {
    fontSize: 20,
    fontWeight: "900",
    color: "white",
  },
});

export default TurnContact;
