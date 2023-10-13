import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect, useContext } from "react";
import { send_otp } from "../utils/auth";
import { AuthContext } from "../store/auth-context";

export default function Dev() {
  const [contact, setContact] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const authCtx = useContext(AuthContext);
  const navigation = useNavigation();

  const validateMobileNumber = (contact) => {
    const pattern = /^\d{10}$/;
    return pattern.test(contact);
  };

  const handleDismissKeyboard = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {
    setIsButtonDisabled(!validateMobileNumber(contact));
  }, [contact]);

  const handleSubmit = async () => {
    try {
      handleDismissKeyboard();
      setisLoading(true);

      const data = await send_otp(contact);

      if (data.statusCode === 200) {
        console.log("login-contact", contact);
        await authCtx.authenticateContact(contact);
        setisLoading(false);
        navigation.navigate("Devotp");
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../assets/img1.png")} />
      </View>
      <View style={{ flex: 1, marginHorizontal: 10 }}>
        <Text style={styles.text}>Login with Phone</Text>
        <Text style={styles.text2}>
          WordifyMe will send you a one -time password via SMS to verify your
          number
        </Text>
        <Text style={styles.text3}>Phone</Text>
        <TextInput
          placeholder="+91"
          textAlignVertical="center"
          placeholderTextColor={"#49454F"}
          inputMode="numeric"
          maxLength={10}
          value={contact}
          onChangeText={(text) => setContact(text)}
          style={styles.input}
        />
        {!validateMobileNumber(contact) && (
          <Text color="red.500">Mobile number must be 10 digits</Text>
        )}
        <Pressable
          style={styles.button}
          isLoading={isLoading}
          isDisabled={isLoading}
          mt={2}
          isLoadingText="Sending OTP"
          onPress={handleSubmit}
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
    top: 80,
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
