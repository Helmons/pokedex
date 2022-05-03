import React from 'react';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'

import { Home } from './src/screens/Home';
import { Details } from './src/screens/Details';
import { Routes } from './src/routes';
import { StatusBar } from 'react-native';
import { AppProvider } from './src/hooks';


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (

    <AppProvider>
      <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
      <Routes />
    </AppProvider>


  )
}
