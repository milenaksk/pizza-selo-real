import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Cabecalho from "../component/Cabecalho.js";

import InicialScreen from "../screen/InicialScreen.js";
import OpcaoScreen from "../screen/OpcaoScreen.js";
import CarrinhoScreen from "../screen/CarrinhoScreen.js";
import PagamentoScreen from "../screen/PagamentoScreen.js";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicial"
        screenOptions={{
          headerLeft: null,
          headerStyle: {
            backgroundColor: "#8B0000",
            borderBottomColor: "#000",
            borderBottomWidth: 1,
          },
          headerTitle: () => <Cabecalho />,
        }}>
        <Stack.Screen name="Inicial" component={InicialScreen} />
        <Stack.Screen name="Opcao" component={OpcaoScreen} />
        <Stack.Screen name="Carrinho" component={CarrinhoScreen} />
        <Stack.Screen name="Pagamento" component={PagamentoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;