import React from 'react';
import { View, Badge, Box, Button, FlatList, Heading, Divider, Avatar, HStack, VStack, Text, Spacer, Center, NativeBaseProvider } from "native-base";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <NativeBaseProvider>
      <View backgroundColor="#eef2ff" h="100%" p="2">
      
       





        <Box border="8" borderRadius="md" backgroundColor="white" style={{ marginTop: 5 }} >

          <VStack space="4"  >
            <Box px="4" pt="4">
              <HStack space={3} justifyContent="space-between">
                <Avatar size="48px" source={{
                  uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }} />


                <VStack>
                  <Text _dark={{
                    color: "warmGray.50"
                  }} color="coolGray.800" bold>
                    Audumber Chaudhari
                  </Text>
                  <Text color="coolGray.600" _dark={{
                    color: "warmGray.200"
                  }}>
                    12.09
                  </Text>
                </VStack>


                <Spacer />
                <Badge colorScheme="success" >
                  <Text fontSize="lg" _dark={{
                    color: "warmGray.50"
                  }} color="coolGray.800" alignSelf="flex-start">
                    <FontAwesome name="rupee" size={18} color="black" /> 10
                  </Text>
                </Badge>


              </HStack>
            </Box>
            <Box px="4">
              NativeBase is a free and open source framework that enable developers
              to build high-quality mobile apps using React Native iOS and Android
              apps with a fusion of ES6.
            </Box>
            <Divider />
            <Box px="3" pb="2">
              <HStack justifyContent="space-between">

                <Button size="sm" variant="ghost" colorScheme="secondary">
                  <HStack >
                    <AntDesign name="like1" size={30} color="black" />
                    {/* <Button size="md" variant="ghost">LIKE</Button> */}
                    <Text pt="2" pl="2">LIKE</Text>
                  </HStack>
                </Button>


                <Button size="sm" variant="ghost" colorScheme="secondary">
                  <HStack>
                    <Ionicons name="checkmark-done-circle" size={30} color="black" />

                    <Text pt="1.5" pl="2">I CAN DO</Text>

                  </HStack>
                </Button>


                <Button size="md" variant="ghost">
                  <HStack>
                  <MaterialIcons name="pageview" size={35} color="black" />
                    <Text  pt="2" pl="2">PREVIEW</Text>
                  </HStack>
                </Button>




              </HStack>

            </Box>



          </VStack>
        </Box>

      </View>

    </NativeBaseProvider>
  );
}

// export default HomeScreen;

