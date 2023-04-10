import React from 'react';
import { createContext, useEffect, useState, useContext } from 'react';
import { Button } from 'react-native'
import { StatusBar } from 'expo-status-bar';


import { NavigationContainer , useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';

import Navigation1 from './navigations/navigation';
import AuthContextProvider, { AuthContext } from './store/auth-context';


//Root function
function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem('token');

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      setIsTryingLogin(false);
    }

    fetchToken();
  }, []);

  if (isTryingLogin) {
    return <AppLoading />;
  }

  return <Navigation1 />;
}





export default function App() {

  return (
    <>
      <StatusBar backgroundColor='#09458C' barStyle="light-content" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}