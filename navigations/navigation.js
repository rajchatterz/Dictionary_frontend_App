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
import AllExpenses from '../screens/AllExpenses';
import Notification from '../screens/Notification';
import Help from '../screens/Help';
import People from '../screens/People';

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
            <Stack.Screen name="About" component={Help} options={{
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
            <Stack.Screen name="About" component={Help} options={{
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
//Authenticated stack
function BottomTabNavigationfun() {
    const navigation = useNavigation();
    const college = "COEP Technological University"

    return (
        
        <BottomTabs.Navigator screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary800 },
            headerTintColor: 'white',
            tabBarActiveTintColor: GlobalStyles.colors.primary700,
        }} >

            <BottomTabs.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: 'Home',
                    headerTitle: "",
                    tabBarLable: "Feed",
                    headerLeft: () => (
                        <>
                            <TouchableOpacity onPress={() => { }}>
                                <View >

                                    <Text style={{ fontSize: 18, marginLeft: 15, color: "white", fontWeight: 'bold' }}>College</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <Ionicons onPress={() => console.log("Location")} style={{ marginLeft: 15 }} name="location-outline" size={14} color="white" />
                                        <Text numberOfLines={1} ellipsizeMode='tail' style={{ color: "white", fontSize: 12 }}>{college.slice(0, 30)}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </>
                    ),
                    headerRight: () => (
                        <>
                            
                                <View style={{ flexDirection: "row" }}>
                               
                                   <Ionicons onPress={() => navigation.navigate('Help')} style={{ marginRight: 15 }} name="help-circle" size={26} color="white" />
                                  
                                   <Ionicons onPress={() => navigation.navigate('Notification')} style={{ marginRight: 15 }} name="notifications" size={26} color="white" />
                                    
                                </View>
                           

                        </>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="home" size={size} color={color} />
                    ),
                }}
            />

            < BottomTabs.Screen name="Hub" component={Cloud}
                options={{
                    title: 'Cloud',
                    tabBarLable: "Cloud",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="cloud-download" size={size} color={color} />

                    ),
                }}
            />

            < BottomTabs.Screen name="People" component={People}
                options={{
                    title: 'Helpers',
                    tabBarLable: "Helper",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="people-arrows" size={size} color={color} />
                    ),
                }}
            />

            < BottomTabs.Screen name="AllExpenses" component={AllExpenses}
                options={{
                    title: 'Profile',
                    tabBarLable: "Profile",
                    tabBarIcon: ({ color, size }) => (
                    
                     <MaterialCommunityIcons name="face-man-profile" size={size} color={color} />

                       
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










