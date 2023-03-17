import { Lable } from 'react-native';
import  React , {useState ,useEffect, useContext} from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Progress, ScrollView, Badge, Icon, IconButton, Box, Button, FlatList, Heading, Divider, Avatar, HStack, VStack, Spacer, Center, NativeBaseProvider } from "native-base";
import { Feather } from '@expo/vector-icons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { GlobalStyles } from '../constants/style';
import  { AuthContext } from '../store/auth-context';



function AllExpenses() {
  const authCtx = useContext(AuthContext);

  const logout_function = async() => {
    console.log("logging you out..")
    await authCtx.logout()
  }


  const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('About')}
      >
      
        <View style={{flexDirection: 'row', alignItems: 'center' }}>
         <Ionicons name="information-circle-outline" size={24} color="#808080" />
        <Text style={styles.title}>{"  "}About</Text>
        
        <View style={{ flex: 1, alignItems: 'flex-end'}}>
        <Ionicons name="chevron-forward-outline" size={24} color="#808080" />
        </View>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.card}
        
      >
          <View style={{flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons name="create-outline" size={24} color="#808080" />
        <Text style={styles.title}>{"  "}Send Feedback</Text>
        <View style={{ flex: 1, alignItems: 'flex-end'}}>
        <Ionicons name="chevron-forward-outline" size={24} color="#808080" />
        </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card}
        onPress={logout_function}
       
      >
           <View style={{flexDirection: 'row', alignItems: 'center' }}>
         <Ionicons name="log-out-outline" size={24} color="#808080" />
        <Text style={styles.title}>{"  "}Logout</Text>
        <View style={{ flex: 1, alignItems: 'flex-end'}}>
        <Ionicons name="chevron-forward-outline" size={24} color="#808080"  />
        </View>
        </View>
      </TouchableOpacity>
    </View>

    
  );
};

const About = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card1}
        
      >
      
        <Text style={styles.title}>Terms of Service</Text>
        <Ionicons name="chevron-forward-outline" size={24} color="#3730a3" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card1}
        
      >
        <Text style={styles.title}>Privacy Policy</Text>
        <Ionicons name="chevron-forward-outline" size={24} color="#3730a3" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card1}
       // onPress={() => handleCardPress(3)}
      >
        <Text style={styles.title}>Open Source Libraries</Text>
        <Ionicons name="chevron-forward-outline" size={24} color="#3730a3" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card1}
  
      >
        <Text style={styles.title}>Licenses and Registrations</Text>
        <Ionicons name="chevron-forward-outline" size={24} color="#3730a3" />
      </TouchableOpacity>

    
    </View>
  );
};

const SendFeedback = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen 2</Text>
    </View>
  );
};



  return (
    <>
     <NavigationContainer independent={true} >
    
    <NativeBaseProvider>

        <ScrollView maxW="100%">

       
          <VStack space={2} pt="4" alignItems="center">

            <Avatar bg="amber.500" source={{
              uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }} size="2xl">
              NB
              <Avatar.Badge bg="green.500" />
            </Avatar>

            <Heading pt="2" size="lg" style={{ color: "grey" }}>Audumber Chaudhari</Heading>

            <HStack>
              <Box w="80%" pt="2"><Progress size="lg" colorScheme="emerald" bg={GlobalStyles.colors.primary200} mb={4} value={75} mx={4} />
              </Box>
              <Text fontSize="lg" color="green">75%</Text>

            </HStack>



            {/* //Acadamic Information */}
            <Box border="8" px="2" borderRadius="md" backgroundColor="white" style={{ marginTop: 5, width: "95%" }}>

              <VStack space="4">
                <Box px="2" pt="4">
                  <HStack space={3} justifyContent="space-between">


                    <VStack>
                      <Text fontSize="lg" color="coolGray.800" bold>
                        Acadamic Information
                      </Text>
                      <Text color="darkgreen">
                        <AntDesign name="Safety" size={15} color="green" /> Safe and Secure .
                      </Text>
                    </VStack>


                    <Spacer />

                    <IconButton icon={<Icon as={Feather} name="edit" />} borderRadius="full" _icon={{
                      color: "orange.500",
                      size: "lg"
                    }} _hover={{
                      bg: "orange.600:alpha.20"
                    }} _pressed={{
                      bg: "orange.600:alpha.20",
                      _icon: {
                        name: "emoji-flirt"
                      },
                      _ios: {
                        _icon: {
                          size: "2xl"
                        }
                      }
                    }} _ios={{
                      _icon: {
                        size: "2xl"
                      }
                    }} />

                  </HStack>
                </Box>
                <Box px="2" pb="4">
                  <HStack>
                    <Ionicons name="book" size={24} color="black" />
                    <Text fontSize="md" pl="2">Engineering</Text>
                  </HStack>

                  <HStack pt="2">
                    <Ionicons name="school" size={24} color="black" />
                    <Text fontSize="md" pl="2">Vellore Institude of technology - AP</Text>
                  </HStack>

                  <HStack pt="2">
                    <Ionicons name="location" size={24} color="black" />
                    <Text fontSize="md" pl="2">Vijyawada , AP</Text>
                  </HStack>
                </Box>

              </VStack>
              {/* </Box> */}





              <Divider my="2" _light={{
                bg: "muted.200"
              }} _dark={{
                bg: "muted.500"
              }} />


              {/* //Contact Information------------------------------------------------------------------------------ */}


              <VStack space="4">
                <Box px="2" pt="4">
                  <HStack space={3} justifyContent="space-between">


                    <VStack>
                      <Text fontSize="lg" color="coolGray.800" bold>
                        Contact Information
                      </Text>
                      <Text color="darkgreen">
                        <AntDesign name="Safety" size={15} color="green" /> Safe and Secure .
                      </Text>
                    </VStack>


                    <Spacer />

                    <IconButton icon={<Icon as={Feather} name="edit" />} borderRadius="full" _icon={{
                      color: "orange.500",
                      size: "lg"
                    }} _hover={{
                      bg: "orange.600:alpha.20"
                    }} _pressed={{
                      bg: "orange.600:alpha.20",
                      _icon: {
                        name: "emoji-flirt"
                      },
                      _ios: {
                        _icon: {
                          size: "2xl"
                        }
                      }
                    }} _ios={{
                      _icon: {
                        size: "2xl"
                      }
                    }} />

                  </HStack>
                </Box>
                <Box px="2" pb="4">
                  <HStack>
                    <Ionicons name="call" size={24} color="black" />
                    <Text fontSize="md" px="2">+91 7798121777</Text>
                    <Badge colorScheme="success" alignSelf="center" borderRadius="10" variant="solid">Verified</Badge>
                  </HStack>

                  <HStack pt="2">
                    <Ionicons name="mail" size={24} color="black" />
                    <Text fontSize="md" pl="2">audumberchaudhari3000@gmail.com</Text>
                  </HStack>

                  <HStack pt="2">
                    <Ionicons name="location" size={24} ccolor="black" />
                    <Text fontSize="md" pl="2">Vijyawada , AP</Text>
                  </HStack>
                </Box>

              </VStack>

              <Divider my="2" _light={{
                bg: "muted.200"
              }} _dark={{
                bg: "muted.500"
              }} />


              {/* //Basic Information-------------------------------------------------------------------- */}
              <VStack space="4">
                <Box px="2" pt="4">
                  <HStack space={3} justifyContent="space-between">


                    <VStack>
                      <Text fontSize="lg" color="coolGray.800" bold>
                        Basic Information
                      </Text>
                      <Text color="darkgreen">
                        <Ionicons name="happy-outline" size={17} color="green" /> You will be suprised on your birthday .
                      </Text>
                    </VStack>


                    <Spacer />

                    <IconButton icon={<Icon as={Feather} name="edit" />} borderRadius="full" _icon={{
                      color: "orange.500",
                      size: "lg"
                    }} _hover={{
                      bg: "orange.600:alpha.20"
                    }} _pressed={{
                      bg: "orange.600:alpha.20",
                      _icon: {
                        name: "emoji-flirt"
                      },
                      _ios: {
                        _icon: {
                          size: "2xl"
                        }
                      }
                    }} _ios={{
                      _icon: {
                        size: "2xl"
                      }
                    }} />

                  </HStack>
                </Box>
                <Box px="2" pb="4">
                  <HStack>
                    <Ionicons name="calendar" size={24} color="black" />
                    <Text fontSize="md" px="2">22nd March 2000</Text>
                  </HStack>

                  <HStack pt="2">
                    <Ionicons name="person" size={24} color="black" />
                    <Text fontSize="md" pl="2">Male</Text>
                  </HStack>

                  <HStack pt="2">
                    <Ionicons name="chatbox-ellipses" size={24} color="black" />
                    <Text fontSize="md" pl="2">Marathi</Text>
                  </HStack>
                </Box>

              
              </VStack>
            
             

            </Box>


         
         {/*  <Button style={{ Width: 90, marginBottom: "2%" }} variant="subtle" colorScheme="secondary" mt="2" isLoadingText="Logging you out !" size="sm" _text={{ fontSize: "sm" }} onPress={logout_function}>

              Logout from your account :(

            </Button>

              */  }
    
   
      
           
          </VStack>
        </ScrollView>
     
      
                
      </NativeBaseProvider>
      
    
     
           <Stack.Navigator   screenOptions={{
                    animation: 'slide_from_right',
                    presentation: 'card',
                    height:"30%"
                    
                }}  >
  <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
  <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
  <Stack.Screen name="SendFeedback" component={SendFeedback} options={{ headerShown: false }} />
 
</Stack.Navigator>
            </NavigationContainer>
          
            
     
      
      </>
   
  )



}

const styles = StyleSheet.create({
 
  container: {
      paddingLeft: 20,
      paddingRight:20,
      paddingTop:10,
    
  
    },
    parent: {
   
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    navigator: {
      flex: 1,
     height: '60%',
    },
card: {
  backgroundColor: '#FFFFFF',
  borderRadius: 5,
  marginBottom: 5,
  padding: 18,
  shadowColor: '#000',
  shadowOffset: { width: 0 },
  shadowOpacity: 0.2,
  shadowRadius: 2,
  elevation: 2,
  
 
},
card1: {
  backgroundColor: '#FFFFFF',
  borderRadius: 5,
  marginBottom: 5,
  padding: 18,
  shadowColor: '#000',
  shadowOffset: { width: 0 },
  shadowOpacity: 0.2,
  shadowRadius: 2,
  elevation: 2,
  flexDirection:'row',
  justifyContent:'space-between'
 
},
title: {
  fontSize: 15,
  color: '#000',
},

});

export default AllExpenses;