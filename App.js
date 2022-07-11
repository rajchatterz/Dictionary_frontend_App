import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { GlobalStyles } from './constants/style';
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import Notification from './screens/Notification';
import PostHelp from './screens/PostHelp';
import People from './screens/People';

// import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator  screenOptions={{
      headerStyle: { backgroundColor: GlobalStyles.colors.primary800 },
      headerTintColor: 'white',
      tabBarActiveTintColor: GlobalStyles.colors.primary700,
    }} >


      <BottomTabs.Screen
       name="RecentExpenses" 
       component={RecentExpenses}
        options={{
          title : 'Recent Feed',
          tabBarLable : "Feed",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="feed" size={size} color={color} />
          ),
             
        }}
      />

<BottomTabs.Screen name="People" component={People}
    options={{
      title : 'Helpers',
      tabBarLable : "Helper",
      tabBarIcon: ({ color, size }) => (
        <FontAwesome5 name="people-arrows" size={size} color={color} />
      ),
         
    }}
 />
<BottomTabs.Screen name="Hub" component={PostHelp}
    options={{
      title : 'Cloud',
      tabBarLable : "Cloud",
      tabBarIcon: ({ color, size }) => (
        <FontAwesome name="cloud-download" size={size} color={color} />
        
      ),
         
    }}
     />
<BottomTabs.Screen name="Notification" component={Notification}
    options={{
      title : 'Notification',
      tabBarLable : "Notification",
      tabBarIcon: ({ color, size }) => (
        <MaterialIcons name="notifications-active" size={size} color={color} />      ),
         
    }}
     />

      <BottomTabs.Screen name="AllExpenses" component={AllExpenses} 
          options={{
            title : 'Profile',
            tabBarLable : "Profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="face-man-profile" size={size} color={color} />
            ),
               
          }}
          />
    </BottomTabs.Navigator>
  );
}


export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="ExpensesOverview" 
          component={ExpensesOverview} 
          options={{ headerShown: false }}
     
        
          />
          <Stack.Screen name="ManageExpense" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
