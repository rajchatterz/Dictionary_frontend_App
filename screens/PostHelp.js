
import React from 'react';
import { View,Stack , ScrollView,Input,Icon,Image, Badge, Box, Button, FlatList, Heading, Divider, Avatar, HStack, VStack, Text, Spacer, Center, NativeBaseProvider } from "native-base";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

function SearchBar() {
  return (
     <VStack  w="100%" space={5} alignSelf="center">
        <Input placeholder="Search  projects , assignments from 12800+" variant="filled" width="100%" borderRadius="10" py="2" px="2" borderWidth="0" InputLeftElement={<Icon  ml="3" size="6" color="gray.400" as={<Ionicons  name="ios-search" />} />} />
      </VStack>
    )
}




function ManageExpense() {
  return (
    <NativeBaseProvider>
       <View backgroundColor="#eef2ff" h="100%" p="2" >
   
                <SearchBar />

<View pt="4">


   

<ScrollView maxW="100%" >
    <Stack space={3} alignItems="center">
   

      <HStack space={5} alignItems="center">
        <Center width="45%" size={40} bg="primary.400" rounded="md"  shadow={3}>
          Box 1
        </Center>
       
        <Center width="45%" size={40} bg="emerald.400" rounded="md"  shadow={3}>
          Box 3
        </Center>
      </HStack>

      <HStack space={5} alignItems="center">
        <Center width="45%" size={40} bg="primary.400" rounded="md"  shadow={3}>
          Box 1
        </Center>
       
        <Center width="45%" size={40} bg="emerald.400" rounded="md"  shadow={3}>
          Box 3
        </Center>
      </HStack>


      <HStack space={5} alignItems="center">
        <Center width="45%" size={40} bg="primary.400" rounded="md"  shadow={3}>
          Box 1
        </Center>
       
        <Center width="45%" size={40} bg="emerald.400" rounded="md"  shadow={3}>
          Box 3
        </Center>
      </HStack>

      <HStack space={5} alignItems="center">
        <Center width="45%" size={40} bg="primary.400" rounded="md"  shadow={3}>
          Box 1
        </Center>
       
        <Center width="45%" size={40} bg="emerald.400" rounded="md"  shadow={3}>
          Box 3
        </Center>
      </HStack>
     

    </Stack>
  
    </ScrollView>
 



   

    </View>


    </View>
    </NativeBaseProvider>
  );
}

export default ManageExpense;

