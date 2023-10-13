import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
  Keyboard,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { verify_otp } from "../utils/auth";
import { AuthContext } from "../store/auth-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Devotp() {
  const [OTP, setOTP] = useState("");
  const [OtpResponse, setOtpResponse] = useState(true);
  const [isLoading, setisLoading] = useState(false);
  const [slideAlertMessage, setSlideAlertMessage] = useState("");
  const authCtx = useContext(AuthContext);
  const navigation = useNavigation();

  const handleDismissKeyboard = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {
    setisLoading(false);
  }, []);

  const handleSubmit = async () => {
    try {
      handleDismissKeyboard();
      setisLoading(true);
      const contact = await AsyncStorage.getItem("contact");
      const data = await verify_otp(contact, OTP);

      if (data.code === 200) {
        setisLoading(false);
        navigation.navigate("Signup");
      } else if (data.code === 201) {
        setisLoading(false);
        await authCtx.authenticate(data.token.access.token);
        navigation.navigate("Dev");
      } else {
        setisLoading(false);
        setSlideAlertMessage("Ohh! Incorrect OTP");
        setOtpResponse(false);
      }
    } catch (error) {
      setSlideAlertMessage(
        "Sorry, Looks like something went wrong from our side!"
      );
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../assets/img2.png")} />
      </View>
      <View style={{ flex: 1, marginHorizontal: 10 }}>
        <Text style={styles.text}>Verify Your Phone</Text>
        <Text style={styles.text2}>
          Please input the OTP sent to your mobile number
        </Text>
        <Text style={styles.text3}>OTP</Text>
        <TextInput
          placeholder=" OTP "
          maxLength={4}
          secureTextEntry
          textAlign="center"
          placeholderTextColor={"#49454F"}
          inputMode="numeric"
          style={styles.input}
          value={OTP}
          onChangeText={(value) => setOTP(value)}
        />
        {!OtpResponse && (
          <Text style={{ color: "red" }}>
            You have entered an incorrect OTP !
          </Text>
        )}
        <Pressable 
        isLoading={isLoading}
        isDisabled={isLoading}
        isLoadingText="verifying OTP"
        onPress={handleSubmit}
        style={styles.button}
        >
          <Text style={styles.btntxt}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    bottom: -100,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 5,
  },
  text2: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 21,
    letterSpacing: 0.32,
    paddingBottom: 20,
  },
  text3: {
    fontSize: 16,
    fontWeight: "600",
    color: "grey",
    lineHeight: 21,
    letterSpacing: -0.32,
  },
  input: {
    height: 50,
    borderWidth: 1,
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 21,
    borderRadius: 4,
    borderColor: "#1B1B1B",
    backgroundColor: "#ffff",
    shadowColor: "rgba(0, 1, 0, 1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  button: {
    backgroundColor: "#6A0DAD",
    height: 50,
    marginTop: 45,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0, 1, 0, 1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  btntxt: {
    fontSize: 16,
    fontWeight: "900",
    color: "white",
  },
});
