import React from 'react';
import { createContext, useEffect, useState, useContext } from 'react';
import { Button } from 'react-native'
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
                headerStyle: { backgroundColor: 'white' },
                headerTintColor: 'white',
                contentStyle: { backgroundColor: 'white' },
            }}
        >
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="OTP" component={OTPPage} options={{ headerShown: false }}/>
            <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}

//Authenticated stack
function BottomTabNavigationfun() {
    const navigation = useNavigation();
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
                    tabBarLable: "Feed",
                    headerRight: () => (
                        <Ionicons onPress={() => navigation.navigate('Notification')} style={{ marginRight: 10 }} name="notifications" size={24} color="white" />
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="home" size={size} color={color} />
                    ),
                }}
            />

            <BottomTabs.Screen name="Hub" component={Cloud}
                options={{
                    title: 'Cloud',
                    tabBarLable: "Cloud",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="cloud-download" size={size} color={color} />

                    ),
                }}
            />

            <BottomTabs.Screen name="People" component={People}
                options={{
                    title: 'Helpers',
                    tabBarLable: "Helper",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="people-arrows" size={size} color={color} />
                    ),
                }}
            />

            <BottomTabs.Screen name="AllExpenses" component={AllExpenses}
                options={{
                    title: 'Profile',
                    tabBarLable: "Profile",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="face-man-profile" size={size} color={color} />
                    ),

                }}
            />

        </BottomTabs.Navigator>
    );
}

function notificationsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Notification" component={Notification} />
        </Stack.Navigator>
    )
}

function AuthenticatedStack() {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen
                    name="ExpensesOverview"
                    component={BottomTabNavigationfun}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Notification" component={notificationsStack} options={{ headerShown: false }} />
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










