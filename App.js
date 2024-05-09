import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Cabecalho from "./src/components/cabecalho.js";
import TelaInicial from "./src/pagina/inicial.js";
import TelaOpcao from "./src/pagina/opcao.js";
import TelaCarrinho from "./src/pagina/carrinho.js";
import TelaPagamento from "./src/pagina/pagamento.js";

const Stack = createStackNavigator();

const App = () => {
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
        }}
      >
        <Stack.Screen name="Inicial" component={TelaInicial} />
        <Stack.Screen name="Opcao" component={TelaOpcao} />
        <Stack.Screen name="Carrinho" component={TelaCarrinho} />
        <Stack.Screen name="Pagamento" component={TelaPagamento} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
