import React from 'react';
import { View, Text, Stylesheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MenuBar from './src/components/MenuBar.js';
import Banner from './src/components/Banner.js';
import Options from './src/components/Options.js';

// I hate React so much

import TelaInicial from './src/pagina/inicial.js'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TelaInicial}
        options={{ header: () => (
          <View>
            <MenuBar />
          </View>
        ) }}
      />
    </Stack.Navigator>
  </NavigationContainer>

);
};


export default App;