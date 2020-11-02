import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Pay from '../screens/Pay';
import Receive from '../screens/Receive';
import ProblemsToEntry from '../screens/ProblemsToEntry';

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
    <Screen name="ProblemsToEntry" component={ProblemsToEntry} />
  </Navigator>
);

export default Modals;
