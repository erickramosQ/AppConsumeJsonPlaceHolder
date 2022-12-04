import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import postsUsuarios from "../pages/postusers";

const Stack = createStackNavigator();

export default function HomeStackScreen() { 
    return (
      <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="otrapantalla" component={postsUsuarios} />
            </Stack.Navigator>
      </NavigationContainer>
  )
};

