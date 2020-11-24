import './src/config/yup';
import React from 'react';

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

import { AccountProvider } from './src/hooks/accounts';

import Stack from './src/navigation/Stack';
import CustomStatusBar from './src/components/CustomStatusBar';

const App = (): JSX.Element => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  return fontsLoaded ? (
    <ThemeProvider theme={theme}>
      <AccountProvider>
        <Stack />
      </AccountProvider>

      <CustomStatusBar />
    </ThemeProvider>
  ) : (
    <AppLoading />
  );
};

export default App;
