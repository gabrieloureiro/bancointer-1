import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Pay from '../screens/Pay';

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
  </Navigator>
);

export default Modals;
