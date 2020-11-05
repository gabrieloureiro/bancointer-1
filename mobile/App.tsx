import './src/config/yup';
import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';

import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';

import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme/default';

import Stack from './src/navigation/Stack';

const App = (): JSX.Element => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  return fontsLoaded ? (
    <ThemeProvider theme={theme}>
      <Stack />
      <StatusBar backgroundColor="" />
    </ThemeProvider>
  ) : (
    <AppLoading />
  );
};

export default App;
