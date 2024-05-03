import React from 'react';
import { View, Text, Stylesheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MenuBar from './src/components/MenuBar.js';
import Banner from './src/components/Banner.js';
import Options from './src/components/Options.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ header: () => <MenuBar /> }} // adicionando a opção header e passando o componente MenuBar
        />
        {/* outras telas */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// i hate react native

