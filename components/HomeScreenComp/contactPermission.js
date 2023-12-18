import React, { useRef, useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, Pressable } from "react-native";
import * as Contacts from 'expo-contacts';

const ContactPermission = ({ onClose }) => {
  const [permissionStatus, setPermissionStatus] = useState(null);

  useEffect(() => {
    checkContactPermission();
  }, []);

  const checkContactPermission = async () => {
    const { status } = await Contacts.getPermissionsAsync();
    setPermissionStatus(status);
  };

  const requestContactPermission = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    setPermissionStatus(status);
  };

  const handleContinue = async () => {
    if (permissionStatus === 'granted') {
      // Permission already granted, you can proceed with your logic here
      console.log("Contact permission already granted");
    } else {
      // Permission not granted, request permission
      await requestContactPermission();
      // Check the permission status again after requesting
      checkContactPermission();
      onClose();
    }
  };

  const handleMayBeLater = async()=>{
    onClose()
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Image
          style={styles.logo}
          source={require("../../assets/book.png")}
        />
        <Text style={styles.title}>Allow access to contacts</Text>
        <Text style={styles.description}>
          Grant access to your contacts for personalized interactions and seamless connections within the app.
        </Text>
        <Pressable onPress={handleContinue} style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>
        <TouchableOpacity style={styles.maybeLater} onPress={handleMayBeLater}>
          <Text style={styles.maybebuttonText}>Maybe Later</Text>
        </TouchableOpacity>
      </View>
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
    paddingTop: 50,
  },
  logo: {
    height: 120,
    width: 120,
    marginBottom: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: "900",
    color: "#696969",
    letterSpacing: -0.32,
    marginBottom: 20,
  },
  description: {
    paddingHorizontal:5,
    fontSize: 16,
    fontWeight: "normal",
    textAlign: "center",
    color: "#A9A9A9",
    letterSpacing: -0.28,
    marginBottom: 40,
    lineHeight: 20,
  },
  button: {
    backgroundColor: "#6A0DAD",
    height: 50,
    width: 350,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
  maybeLater: {
    backgroundColor:"#F5F5F5",
    height: 50,
    width: 350,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    marginBottom: 10
  },
  maybebuttonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#101010",
  },
});

export default ContactPermission;
