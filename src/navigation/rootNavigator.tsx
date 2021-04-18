import React from 'react';
import { Routes } from './Routes';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, PanGesture, Worklets } from '@screens';

const Stack = createStackNavigator<Routes>();

const RootNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title: 'Learn Reanimated 2',
        }}
      />
      <Stack.Screen
        name='PanGesture'
        component={PanGesture}
        options={{
          title: 'PanGesture',
        }}
      />
      <Stack.Screen
        name='Worklets'
        component={Worklets}
        options={{
          title: 'Worklets',
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
