import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Pay from '../screens/Pay';
import Receive from '../screens/Receive';

const { Navigator, Screen } = createStackNavigator();

const Modals: React.FC = () => (
  <Navigator
    mode="modal"
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: 'transparent' },
      cardOverlayEnabled: true,
    }}
  >
    <Screen name="Pay" component={Pay} />
    <Screen name="Receive" component={Receive} />
  </Navigator>
);

export default Modals;
