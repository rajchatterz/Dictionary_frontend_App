import React, { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import {
  View,
  Box,
  Text,
  Image,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
} from "native-base";
import { AuthContext } from "../../store/auth-context";
import { verify_otp } from "../../utils/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SlideAlert from "../../components/SlideAlert";

const OTPPage = () => {
  const navigation = useNavigation();

  const [contact, storedcontact] = useState("");
  const [OTP, setOTP] = useState("");
  const [OtpResponse, setOtpResponse] = useState(true);
  const [isLoading, setisLoading] = useState(false);
  const authCtx = useContext(AuthContext);
  const [slideAlertMessage, setSlideAlertMessage] = useState("");

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
        navigation.navigate("home");
      } else {
        setisLoading(false);
        setSlideAlertMessage("Ohh! Incorrect OTP");
        setOtpResponse(false);
      }
    } catch (error) {
      setSlideAlertMessage("Sorry, Looks like something went wrong from our side!");
      console.error(error);
    }
  };

  return (
    <NativeBaseProvider>
        
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">

      {/* {slideAlertMessage !== "" && (
                <SlideAlert message={slideAlertMessage} onSlideUpComplete={() => setSlideAlertMessage("")} style={{ zIndex: 2 }} />
                )} */}
                
        <View style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20, flex: 0.8 }}>
          <Image
            alt="Description of the image"
            source={{ uri: 'https://res.cloudinary.com/education4ol/image/upload/v1673985905/Email_campaign-rafiki_hmu0eu.png' }}
            style={{ width: '100%', height: '100%' , zIndex: -1 }}
            resizeMode="cover"
          />
        </View>
        <Center flex={1} px="3" paddingTop={"10%"}>
          <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
            <Center w="100%">
              <Box safeArea p="2" py="2" w="95%" maxW="95%">
                <Heading size="lg" fontWeight="700" color="coolGray.800" _dark={{ color: "warmGray.50" }}>
                  Verify your phone :)
                </Heading>
                <Heading mt="1" _dark={{ color: "warmGray.200" }} color="coolGray.600" fontWeight="medium" size="xs">
                  Please input the OTP sent to your device.
                </Heading>

                <VStack space={3} mt="5">
                  <FormControl>
                    <FormControl.Label>One Time Password</FormControl.Label>
                    <Input
                      size="2xl"
                      placeholder="****"
                      height="60"
                      keyboardType="number-pad"
                      maxLength={4}
                      value={OTP}
                      onChangeText={(value) => setOTP(value)}
                    />
                    {!OtpResponse && (
                      <Text style={{ color: "red" }}>You have entered an incorrect OTP !</Text>
                    )}
                  </FormControl>

                  <Button
                    isLoading={isLoading}
                    isDisabled={isLoading}
                    mt="2"
                    isLoadingText="verifying OTP"
                    colorScheme="indigo"
                    mt="2"
                    size="lg"
                    _text={{ fontSize: "lg" }}
                    onPress={handleSubmit}
                  >
                    Verify
                  </Button>
                  <HStack mt="6" justifyContent="center">
                    <Text fontSize="sm" color="" _dark={{ color: "warmGray.200" }}>
                      Build with Love for Gen-Z
                    </Text>
                  </HStack>
                </VStack>
              </Box>
            </Center>
          </TouchableWithoutFeedback>
        
        </Center>
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
};

export default OTPPage;
