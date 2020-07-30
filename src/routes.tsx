import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '~/screens/Home';
import CourseDetails from '~/screens/CourseDetails';

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="none"
    >
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="CourseDetails"
        component={CourseDetails}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
