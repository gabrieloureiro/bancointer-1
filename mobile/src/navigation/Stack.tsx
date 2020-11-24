import React from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationTheme } from '../styles/theme/default';

import arrowLeftIcon from '../assets/icons/arrow-left.png';

import Initial from '../screens/Initial';
import Modals from './Modals';
import SelectAccount from '../screens/SelectAccount';
import ForgotPassword from '../screens/ForgotPassword';
import NewAccount from '../screens/NewAccount';
import Dashboard from '../screens/Dashboard';

const { Navigator, Screen } = createStackNavigator();

const Stack: React.FC = () => (
  <NavigationContainer theme={NavigationTheme}>
    <Navigator>
      <Screen
        name="Initial"
        component={Initial}
        options={{
          headerShown: false,
        }}
      />

      <Screen
        name="SelectAccount"
        component={SelectAccount}
        options={{
          cardShadowEnabled: false,
          headerStatusBarHeight: 0,
          headerStyle: {
            height: 120,
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleAlign: 'center',
          headerTitle: 'Selecione a conta',
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: 'Inter_700Bold',
          },
          headerLeft: props => (
            <TouchableWithoutFeedback {...props}>
              <Image source={arrowLeftIcon} />
            </TouchableWithoutFeedback>
          ),
          headerLeftContainerStyle: {
            marginLeft: 16,
          },
        }}
      />

      <Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerShown: false,
        }}
      />

      <Screen
        name="NewAccount"
        component={NewAccount}
        options={{
          headerShown: false,
        }}
      />

      <Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />

      <Screen
        name="Modals"
        component={Modals}
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: 'transparent' },
          cardOverlayEnabled: true,
        }}
      />
    </Navigator>
  </NavigationContainer>
);

export default Stack;
