import React, { useRef } from 'react'
import 'react-native-gesture-handler'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components/native'
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native'
import { RootStackParamList, Routes } from './src/routes'
import theme from './src/theme'

export default function App() {
  const navigation = useRef<NavigationContainerRef<RootStackParamList> | null>(null)

  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer ref={navigation}>
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
