import { ScrollView, Text, View } from "react-native";

import React from "react";
import Pe from "../component/Pe";

const CarrinhoScreen = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <Text>Aqui é Carrinho</Text>
      </ScrollView>
      <Pe/>
    </View>
  );
};

export default CarrinhoScreen;
