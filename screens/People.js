import React from "react";
import {
  View,
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  NativeBaseProvider,
} from "native-base";

import People from "../components/HelperList";
import hotels from "../data/hotels";

const Example = () => {
  const data = hotels
  console.log(data)
  return (
    <Box width="100%">
      {data.map((item,index) => (
        <People key={index} item={item}/>
      ))}
    </Box>
  );
};

export default (People) => {
  return (
    <NativeBaseProvider>
      <View  height="100%" style={{ backgroundColor: "#eef2ff" }}>
        <Example />
      </View>
    </NativeBaseProvider>
  );
};
