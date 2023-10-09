import React, { useState, useContext, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import { Text, Image, Heading, VStack, FormControl, ScrollView, Input, Button, HStack, Center, NativeBaseProvider } from "native-base";
import { send_otp } from '../../utils/auth'
import { AuthContext } from '../../store/auth-context';
import GoogleLogin from "../../components/Auth/GoogleAuthentication"

const Example = () => {
  const navigation = useNavigation();
  const [contact, setContact] = useState('');
  const [isLoading, setisLoading] = useState(false)
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const authCtx = useContext(AuthContext);

  const handleDismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const validateMobileNumber = (contact) => {
    const pattern = /^\d{10}$/;
    return pattern.test(contact);
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
        console.log('login-contact', contact)
        await authCtx.authenticateContact(contact)
        setisLoading(false);
        navigation.navigate('OTP');
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
      <Center flex={1} bg="white" width={"90%"}>
        <VStack space={3} width="100%">
          <Heading size="lg" fontWeight="700" color="coolGray.800">
            Hey, Buddy!
          </Heading>
          <Heading mt={1} color="coolGray.600" fontWeight="medium" size="xs">
            Login or Signup to continue!
          </Heading>
          <FormControl>
            <FormControl.Label>Mobile</FormControl.Label>
            <Input
              size="2xl"
              placeholder="+91"
              height={12}
          
              keyboardType="numeric"
              maxLength={10}
              value={contact}
              onChangeText={text => setContact(text)}
            />
            {!validateMobileNumber(contact) && (
              <Text color="red.500">Mobile number must be 10 digits</Text>
            )}
          </FormControl>
          
          <Button
            isLoading={isLoading}
            isDisabled={isLoading}
            mt={2}
            isLoadingText="Sending OTP"
            colorScheme="indigo"
            size="lg"
            _text={{ fontSize: "lg" }}
            onPress={handleSubmit}
          >
            
            Continue with Phone
          </Button>
          <GoogleLogin />
       
          <HStack mt={6} justifyContent="center">
            <Text fontSize="sm" color="warmGray.200">
              Built with Love for Gen-Z
            </Text>
          </HStack>
        </VStack>
      </Center>
    </TouchableWithoutFeedback>
  );
};

const LoginPage = () => {
  return (
    <NativeBaseProvider>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <Image
        alt="Description of the image"
          source={{ uri: 'https://res.cloudinary.com/education4ol/image/upload/v1676445590/Blue_Navy_Modern_Mobo_Tech_Logo_6_r53ako.png' }}
          style={{ width: '100%', height: '40%', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
          resizeMode="cover"
        />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Center flex={1} px={3} paddingTop={5}>
            <Example />
          </Center>
        </ScrollView>
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
};

export default LoginPage;
