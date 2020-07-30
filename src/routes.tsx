import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '~/screens/Home';
import CourseDetails from '~/screens/CourseDetails';

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={Home}
    />
    <Stack.Screen
      name="CourseDetails"
      component={CourseDetails}
    />
  </Stack.Navigator>
);

export default Routes;
