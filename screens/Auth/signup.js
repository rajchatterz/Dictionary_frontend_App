import React, { useState, useContext } from "react";
import { useNavigation } from '@react-navigation/native';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { View, Radio, KeyboardAvoidingView, ScrollView, Box, Text, Image, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";







const ExampleSignup = () => {
  console.log("on SignUp Page")
  const navigation = useNavigation();
  const [contact, setContact] = useState('');
  const [value, setValue] = React.useState("male");
  const handleSubmit = async () => {
    try {
      // Make a POST request to the API with the contact
      const response = await fetch('https://backlogappbackend-production.up.railway.app/v1/auth/otp/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contact
        })
      });

      const data = await response.json();
      if (data.statusCode == 200) {
        navigation.navigate('OTP');
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
              <Input />

            </FormControl>

            <FormControl mb="5">
              <FormControl.Label>Email*</FormControl.Label>
              <Input />
              
            </FormControl>


            <FormControl mb="5">
              <FormControl.Label>College / University*</FormControl.Label>

                <Input />
            
            </FormControl>


       <FormControl mb="5">
          <FormControl.Label>City*</FormControl.Label>
          <GooglePlacesAutocomplete
            placeholder=""
            styles={{
              container: {
                flex: 0,
              },
              textInputContainer: {
                borderColor: 'gray',
                borderWidth: 0.5,
              },
              textInput: {
                fontSize: 18,
              },
            }}
            query={{
              key: 'AIzaSyBuxI-ect9yK8dLwiwT2bLsIpPfq2j8Ar0',
              language: "en",
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={200}
          />
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



