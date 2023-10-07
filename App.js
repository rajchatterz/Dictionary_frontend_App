
import React from 'react';
import {useEffect, useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import Navigation1 from './navigations/navigation';
import AuthContextProvider, { AuthContext } from './store/auth-context';

import { usePushNotifications } from "./pushNotification";



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

  const { expoPushToken } = usePushNotifications();
  console.log(expoPushToken);

  return (
    <>
      <StatusBar backgroundColor='#2E86C1' barStyle="light-content" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}