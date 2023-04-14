import React from 'react';
import { createContext, useEffect, useState, useContext } from 'react';
import { Button, View, Text, TouchableOpacity , Pressable  } from 'react-native'
import { StatusBar } from 'expo-status-bar';


import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';

import { GlobalStyles } from '../constants/style';
import Cloud from '../screens/Cloud';
import HomeScreen from '../screens/HomeScreen';

import Notification from '../screens/Notification';
import Help from '../screens/Help';
import Order from '../screens/OrderScreen';
import AboutUs from '../screens/Profile/AboutUs';
import Profile from '../screens/ProfileScreen'
import UserFeedback from '../screens/Profile/UserFeedback';
import ReportDamage from '../screens/Profile/ReportDamage';

import AuthContextProvider, { AuthContext } from '../store/auth-context';

import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import LoginScreen from '../screens/Auth/login';
import SignupScreen from '../screens/Auth/signup';
import OTPPage from '../screens/Auth/otp'

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

//used for navigating from one screen to other in stack navigation


//stacknavigation


//Authstack
function AuthStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                animation: 'slide_from_right', //<-- this is what will do the trick
                presentation: 'card',
                headerStyle: { backgroundColor: 'white' },
                headerTintColor: 'white',
                contentStyle: { backgroundColor: 'white' },
            }}
        >
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="OTP" component={OTPPage} options={{ headerShown: false }} />
            <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

function NotificationsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Notification" component={Notification} options={{
                title: 'Notification',
                headerTitleStyle: {
                    color: '#fff',
                },
                headerStyle: {
                    backgroundColor: GlobalStyles.colors.primary800,
                },
            }} />
        </Stack.Navigator>
    )
}

function HelpStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Help" component={Help} options={{
                title: 'Help',
                headerTitleStyle: {
                    color: '#fff',
                },
                headerStyle: {
                    backgroundColor: GlobalStyles.colors.primary800,
                },
            }} />
        </Stack.Navigator>
    )
}

function AboutStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="About" component={AboutUs} options={{
                title: 'About',
                headerTitleStyle: {
                    color: '#fff',
                },
                headerStyle: {
                    backgroundColor: GlobalStyles.colors.primary800,
                },
            }} />
        </Stack.Navigator>
    )
}

function FeedbackStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Feedback" component={UserFeedback} options={{
                title: 'Feedback',
                headerTitleStyle: {
                    color: '#fff',
                },
                headerStyle: {
                    backgroundColor: GlobalStyles.colors.primary800,
                },
            }} />
        </Stack.Navigator>
    )

}

function ReportDamageStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Report Damage" component={ReportDamage} options={{
                title: 'Report Damage',
                headerTitleStyle: {
                    color: '#fff',
                },
                headerStyle: {
                    backgroundColor: GlobalStyles.colors.primary800,
                },
            }} />
        </Stack.Navigator>
    )
}
//Authenticated stack
function BottomTabNavigationfun() {
    const navigation = useNavigation();
    const college = "COEP Technological University"

    return (
        
        <BottomTabs.Navigator  screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary800 },
            headerTintColor: 'white',
            tabBarActiveTintColor: GlobalStyles.colors.primary700,
            tabBarStyle: { position: 'absolute' , paddingBottom:"2%" , paddingTop:"1%" ,height:"7%" },
            
            tabBarIndicatorStyle: {
                backgroundColor: GlobalStyles.colors.primary700,
                height: 2,
              },
            tabBarLabelStyle: { fontSize: 13 },
            tabBarIconStyle: { color: 'blue' },
            
        }}
         >

            <BottomTabs.Screen
                name="HomeScreen"
                component={HomeScreen}
                
            />

            < BottomTabs.Screen name="Hub" component={Cloud}
                options={{
                    title: 'Price List',
                    tabBarLable: "Price List",
                    tabBarLabelStyle : {
                        fontSize:12,
                        fontWeight:"600"
                    },
                    tabBarHideOnKeyboard : true,
                    tabBarIcon: ({focused,  color, size }) => (
                      
                        <Ionicons  name = {focused ? 'pricetags' : 'pricetags-outline'}  size={size} color={color} />

                    ),
                }}
            />

            < BottomTabs.Screen name="Order" component={Order}
                options={{
                    title: 'Order',
                    tabBarLable: "Order",
                    tabBarLabelStyle : {
                        fontSize:12,
                        fontWeight:"600"
                    },
                    tabBarHideOnKeyboard : true,
                    tabBarIcon: ({focused ,  color, size }) => (
<MaterialCommunityIcons name= { focused ? "truck-delivery":"truck-check-outline"} size={size + 2} color={color} />
                    ),
                }}
            />

            < BottomTabs.Screen name="Profile" component={Profile}
                options={{
                    title: 'Profile',
                    tabBarLable: "Profile",
                    tabBarLabelStyle : {
                        fontSize:12,
                        fontWeight:"600"
                    },
                    tabBarHideOnKeyboard : true,
                    tabBarIcon: ({focused ,  color, size }) => (
                    
                     <FontAwesome name={focused ? "user" : 'user-o'} size={size} color={color} />

                       
                    ),

                }}
            />

        </BottomTabs.Navigator >
    );
}



function AuthenticatedStack() {
    return (
        <>

            <Stack.Navigator
                screenOptions={{
                    animation: 'slide_from_right', //<-- this is what will do the trick
                    presentation: 'card',

                }} >
                <Stack.Screen
                    name="ExpensesOverview"
                    component={BottomTabNavigationfun}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Notification" component={NotificationsStack} options={{ headerShown: false }} />
                <Stack.Screen name="Help" component={HelpStack} options={{ headerShown: false }} />
                <Stack.Screen name="About" component={AboutStack} options={{ headerShown: false }} />
                <Stack.Screen name="Feedback" component={FeedbackStack} options={{ headerShown: false }} />
                <Stack.Screen name="Report Damage" component={ReportDamageStack} options={{ headerShown: false }} />
            </Stack.Navigator>
        </>
    );
}


//navigation 
function Navigation() {
    const authCtx = useContext(AuthContext);

    return (
        <NavigationContainer>

            {!authCtx.isAuthenticated && <AuthenticatedStack />}
            {authCtx.isAuthenticated && <AuthenticatedStack />}

        </NavigationContainer>
    );
}

export default Navigation;










