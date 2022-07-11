import React from "react";
import { View ,Stack, Alert, HStack, VStack, Text, Divider, Center, NativeBaseProvider } from "native-base";

function Example() {
  const getTextColor = variant => {
    switch (variant) {
      case "left-accent":
      case "top-accent":
      case "subtle":
        return "coolGray.800";

      case "solid":
        return "warmGray.50";
    }
  };

  return <>
      <Stack space={3} w="97%" maxW="400">
   
              
              <Alert w="100%" variant='left-accent'  status="success">
                <VStack space={2} flexShrink={1} w="100%">
                  <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                    <HStack space={2} flexShrink={1} alignItems="center">
                     
                      <Text color={getTextColor('left-accent')}>
                      The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
                      </Text>
                    </HStack>
                  </HStack>
                </VStack>
              </Alert>

              <Alert w="100%" variant='left-accent' >
                <VStack space={2} flexShrink={1} w="100%">
                  <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                    <HStack space={2} flexShrink={1} alignItems="center">
                     
                      <Text color={getTextColor('left-accent')}>
                      The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
                      </Text>
                    </HStack>
                  </HStack>
                </VStack>
              </Alert>
          
          

      </Stack>
      </>
   ;
}

    export default Notification => {
        return (
      
<NativeBaseProvider style={{backgroundColor :"#e0e7ff"}}>
              <View p='2' height='100%' style={{backgroundColor :"#eef2ff"}}>
              <Example />
              </View>
           
               
            
          </NativeBaseProvider>
       
          
        );
    };

