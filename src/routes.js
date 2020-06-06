import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Convert from './pages/Convert';
import Splits from './pages/Splits';
import Predict from './pages/Predict';
import Pace from './pages/Pace';

import TabBar from './components/TabBar';

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="Convercor" component={Convert} />
      <Tab.Screen name="Splits" component={Splits} />
      <Tab.Screen name="Tempo" component={Predict} />
      <Tab.Screen name="Pace" component={Pace} />
    </Tab.Navigator>
  );
}

export default Routes;
