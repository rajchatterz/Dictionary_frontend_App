import AsyncStorage from '@react-native-async-storage/async-storage';

import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({
  token: '',
  contact:'',
  isAuthenticated: false,
  authenticate: (token) => {},
  authenticateContact:(contact)=>{},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [authContact, setContact] = useState();

  function authenticate(token) {
    setAuthToken(token);
    AsyncStorage.setItem('token', token);
  }

  function authenticateContact (contact) {
     setContact(contact);
      AsyncStorage.setItem('contact', contact);
 
    }

  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem("@user");
  }

  const value = {
    token: authToken,
    contact:authContact,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    authenticateContact:authenticateContact,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;