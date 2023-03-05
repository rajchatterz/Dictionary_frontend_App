import  React , {useState ,useEffect, useContext} from "react";
import { useNavigation } from '@react-navigation/native';
import { Keyboard , TouchableWithoutFeedback } from 'react-native';
import {View, Box, Text, Image, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";
import  { AuthContext } from '../../store/auth-context';
import {verify_otp} from '../../utils/auth'

const ExampleOTP = () => {
  const navigation = useNavigation();

  const [contact , storedcontact] = useState('');
  const [OTP , setOTP] = useState('')
  const [OtpResponse , setOtpResponse] = useState(true)
  const [isLoading , setisLoading] = useState(false)
  const authCtx = useContext(AuthContext);

  const handleDismissKeyboard = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {
    setisLoading(false)
  }, []);
  
  const handleSubmit = async () => {
    try {
      // Make a POST request to the API with the contact
      handleDismissKeyboard
      
      setisLoading(true)
      navigation.navigate('Signup');
      const contact = "7798121777"
      const data = await verify_otp( contact , OTP)

      
      if(data.code == 200){
        //navigation.navigate('signup');
        setisLoading(false)
        await authCtx.authenticate(data.token.access.token)
        navigation.navigate('Signup');
        console.log(data);
      }
      else if(data.code == 201){
        setisLoading(false)
        await authCtx.authenticate(token)
        navigation.navigate('home');
      }else
      {
        setisLoading(false)
        setOtpResponse(false)
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
        Verify your phone :)
      </Heading>
      <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
        Please input the OTP sent to your device.
      </Heading>

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>One Time Password</FormControl.Label>
          <Input size="2xl" placeholder="****" height='40%'  keyboardType="number-pad"
        maxLength={4}  value={OTP} onChangeText={Number => setOTP(Number)}/>
        {!OtpResponse && (
        <Text style={{ color: 'red' }}>
          You have entered an incorrect OTP !
        </Text>
      )}
        </FormControl>
       
        <Button isLoading={isLoading}  isDisabled={isLoading} mt="2"  isLoadingText= "verifying OTP" colorScheme="indigo"  mt="2"   size="lg" _text={{ fontSize: "lg" }}  onPress={handleSubmit}>
          Verify
        </Button>
        <HStack mt="6" justifyContent="center">
          <Text fontSize="sm" color="" _dark={{
            color: "warmGray.200"
          }}>
            Build with Love for Gen-Z
          </Text>

        </HStack>
      </VStack>
    </Box>
  </Center> 
  </TouchableWithoutFeedback>);
};



// export default LoginPage;

export default OTPPage => {
  return (
    <NativeBaseProvider >
 <View style={{ borderBottomLeftRadius:20 , borderBottomRightRadius:20 ,flex: 0.8 }}>
 <Image
    source={{uri: 'https://res.cloudinary.com/education4ol/image/upload/v1673985905/Email_campaign-rafiki_hmu0eu.png'}}
    style={{width: '100%', height: '100%'}}
    resizeMode="cover"
/>
    </View>
    <Center flex={1} px="3" paddingTop={"10%"}>
        <ExampleOTP />
      </Center>
   </NativeBaseProvider>
 );
};
