import {createStackNavigator} from '@react-navigation/stack';
import {ROUTE_NAMES} from '../config';
import React from 'react';
import Landing from '../screens/Landing';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTE_NAMES.LANDING}>
      <Stack.Screen
        name={ROUTE_NAMES.LANDING}
        component={Landing}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
