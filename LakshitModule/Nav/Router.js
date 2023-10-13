import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Dev from "../Dev";
import Devotp from "../Devotp";
import SignupScreen from "../../screens/Auth/signup";

const Stack = createStackNavigator();

export default function Router() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="Dev">
    <Stack.Screen
          name={'Dev'}
          component={Dev}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name={'Devotp'}
          component={Devotp}
          options={{
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
   </NavigationContainer>
  );
}
