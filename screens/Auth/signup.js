import React, { useState, useContext } from "react";
import { useNavigation } from '@react-navigation/native';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { View, Radio, KeyboardAvoidingView, ScrollView, Box, Text, Image, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";
import {base_url} from '../../utils/constants'
import AsyncStorage from '@react-native-async-storage/async-storage';
import  { AuthContext } from '../../store/auth-context';





const ExampleSignup = () => {
  console.log("on SignUp Page")
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [college, setCollege] = useState('');
  
  const authCtx = useContext(AuthContext);
 
  const handleName = (name) => {
    setName(name);
  };

  const handleEmail = (email) => {
    setEmail(email);
  };

  const handleCollege = (college) => {
    setCollege(college);
  };




  const handleSubmit = async () => {

    console.log(name,email);
    try {
      // Make a POST request to the API with the contact
      const contact= await AsyncStorage.getItem('contact');
      console.log(contact);
     const response = await fetch(base_url+'/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
         contact:contact,
         password:contact+"@abc123",
         name:name,
         email:contact+"@gmail.com",

        })
      });

      const data = await response.json();
      if (data.statusCode == 201) {
        await authCtx.authenticate(data.token.access.token)
        navigation.navigate('home');
        console.log(data);
      } else {
        console.log(data.message)
      }

    } catch (error) {
      console.error(error);
    } 
  
  };

  return (
    <>
 <Box safeArea p="5" w="100%" maxW="100%" roundedBottom='xl' bg={["#3730a3"]}>
          <Heading size="lg" fontWeight="700" color="white" _dark={{
            color: "warmGray.50"
          }}>
            Signup , Buddy !
          </Heading>
          <Heading mt="1" _dark={{
            color: "warmGray.200"
          }} color="#818cf8" fontWeight="medium" size="xs">
            Signup to continue!
          </Heading>
        </Box>
    
    <TouchableWithoutFeedback>
     
      <Center w="100%" >
        


        <Box safeArea p="2" py="2" px="2" w="95%" maxW="95%">
          <VStack space={3} mt="5">
            <FormControl mb="5">
              <FormControl.Label>Name*</FormControl.Label>
              <Input  onChangeText={handleName}
        value={name} />

            </FormControl>





            <Button mt="2" colorScheme="indigo" size="lg" _text={{ fontSize: "lg" }} onPress={handleSubmit}>
              Continue with Signup !
            </Button>
          </VStack>
        </Box>
      </Center>
    </TouchableWithoutFeedback>
    </>);

};



// export default LoginPage;

export default OTPPage => {
  return (
    <NativeBaseProvider >
      
      <Center >
        <ExampleSignup />
      </Center>
    </NativeBaseProvider>
  );
};



