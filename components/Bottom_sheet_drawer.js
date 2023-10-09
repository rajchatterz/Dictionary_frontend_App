import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";

import React, { useState } from "react";

const BottomScreenDrawer = ({ navigation }) => {
  // We need to get the height of the phone and use it relatively,
  // This is because height of phones vary
  const windowHeight = Dimensions.get("window").height;

  // This state would determine if the drawer sheet is visible or not
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  // Function to open the bottom sheet
  const handleOpenBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  // Function to close the bottom sheet
  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleOpenBottomSheet}
        style={{
          width: "90%",
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 1,
          borderColor: "#86827e",
          paddingVertical: 12,
          borderRadius: 8,
        }}
      ></TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        // We use the state here to toggle visibility of Bottom Sheet
        visible={isBottomSheetOpen}
        // We pass our function as default function to close the Modal
        onRequestClose={handleCloseBottomSheet}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "#000000AA",
            justifyContent: "flex-end",
          }}
        >
          <View style={[styles.bottomSheet, { height: windowHeight * 0.6 }]}>
            <View
              style={{
                flex: 0,
                width: "100%",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Text>Preview</Text>
              <TouchableOpacity onPress={handleCloseBottomSheet}>
                <View style={{ padding: 10 }}>
                  <FontAwesome name="close" size={24} color="grey" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BottomScreenDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomSheet: {
    position: "absolute",
    left: 0,
    right: 0,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 23,
    paddingHorizontal: 25,
    bottom: -1,

    borderColor: "#09458C",
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 24,
  },
  blurView: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
