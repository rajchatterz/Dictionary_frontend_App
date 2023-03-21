import  React , {useState, useContext} from "react";
import { useNavigation } from '@react-navigation/native';
import { Keyboard , TouchableWithoutFeedback } from 'react-native';
import { View, Box, Text, Image, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";
import {send_otp} from '../../utils/auth'
import  { AuthContext } from '../../store/auth-context';
import { useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Example = () => {
  const navigation = useNavigation();
  const [contact , setContact] = useState('');
  const [isLoading , setisLoading] = useState(false)
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const authCtx = useContext(AuthContext);

  const handleDismissKeyboard = () => {
    Keyboard.dismiss();
  };

  //used for 10 digit number validation (red color text)
  const validateMobileNumber = (contact) => {
    const pattern = /^\d{10}$/;
    return pattern.test(contact);
  };

  useEffect(() => {
    setIsButtonDisabled(!validateMobileNumber(contact));
  }, [contact]);

  
  const handleSubmit = async () => {
    try {
     
      handleDismissKeyboard
      
      setisLoading(false)
      
      //calling the function which call the api for sending otp
      const data = await send_otp(contact)
     
    
      if(data.statusCode == 200){
        console.log('login-contact',contact)

       await authCtx.authenticateContact(contact);
       const phone= AsyncStorage.getItem('contact');
       console.log('after-login',phone);
      
        navigation.navigate('OTP');
        
        console.log(data);
      }else{
        console.log(data.message)
      }
      
    } catch (error) {
      console.error(error);
    }
  };
  return ( 
    <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
  <Center w="100%" >

    <Box safeArea p="2" py="2" w="95%" maxW="95%">
      <Heading size="lg" fontWeight="700" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
        Hey , Buddy !
      </Heading>
      <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
        Login or Signup to continue!
      </Heading>

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Mobile</FormControl.Label>
          <Input  size="2xl" placeholder="+91" height='40%' keyboardType="numeric" maxLength={10} value={contact} onChangeText={text => setContact(text)}/>
          {!validateMobileNumber(contact) && (
        <Text style={{ color: 'red' }}>
          Mobile number must be 10 digits
        </Text>
      )}
        </FormControl>
       
        <Button isLoading={isLoading}  isDisabled={isButtonDisabled} mt="2"  isLoadingText="Sending OTP" colorScheme="indigo" size="lg" _text={{ fontSize: "lg" }} onPress={handleSubmit}>
          Continue with Phone
        </Button>
        <HStack mt="6" justifyContent="center">
          <Text fontSize="sm"  _dark={{
            color: "warmGray.200"
          }}>
            Build with Love for Gen-Z
          </Text>

        </HStack>
      </VStack>
    </Box>
  </Center>
  </TouchableWithoutFeedback>
  );
};



// export default LoginPage;

export default LoginPage => {
  return (
    <NativeBaseProvider >
      <View style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20, flex: 0.8, backgroundColor: 'red' }}>
        <Image
          source={{ uri: 'https://res.cloudinary.com/education4ol/image/upload/v1676445590/Blue_Navy_Modern_Mobo_Tech_Logo_6_r53ako.png' }}
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
        />
      </View>

      <Center flex={1} px="3" paddingTop={"10%"}>
        <Example />
      </Center>




    </NativeBaseProvider>


  );
};
