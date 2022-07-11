import { Lable } from 'react-native';
import { View,Progress, ScrollView, Badge, Icon, IconButton, Box, Button, FlatList, Heading, Divider, Avatar, HStack, VStack, Text, Spacer, Center, NativeBaseProvider } from "native-base";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { GlobalStyles } from '../constants/style';

function AllExpenses() {

  return (
   

    <NativeBaseProvider>

    <ScrollView maxW="100%" >
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
        <Box border="8" px="2" borderRadius="md" backgroundColor="white" style={{ marginTop: 5 , width:"95%"}} >

          <VStack space="4"  >
            <Box px="2" pt="4" >
              <HStack space={3} justifyContent="space-between">


                <VStack>
                  <Text fontSize="lg" color="coolGray.800" bold>
                    Acadamic Information
                  </Text>
                  <Text color="darkgreen" >
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


<VStack space="4"  >
  <Box px="2" pt="4" >
    <HStack space={3} justifyContent="space-between">


      <VStack>
        <Text fontSize="lg" color="coolGray.800" bold>
          Contact Information
        </Text>
        <Text color="darkgreen" >
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
      <Badge colorScheme="success" alignSelf="center" borderRadius="10"  variant="solid">Verified</Badge>
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
      <VStack space="4"  >
  <Box px="2" pt="4" >
    <HStack space={3} justifyContent="space-between">


      <VStack>
        <Text fontSize="lg" color="coolGray.800" bold>
          Basic Information
        </Text>
        <Text color="darkgreen" >
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





      </VStack>
      </ScrollView>
    </NativeBaseProvider>
   
  )



}

export default AllExpenses;