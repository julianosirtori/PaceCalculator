import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Convert from './pages/Convert';
import Splits from './pages/Splits';
import Predict from './pages/Predict';
import Pace from './pages/Pace';

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Converçor" component={Convert} />
      <Tab.Screen name="Splits" component={Splits} />
      <Tab.Screen name="Tempo" component={Predict} />
      <Tab.Screen name="Pace" component={Pace} />
    </Tab.Navigator>
  );
}

export default Routes;
