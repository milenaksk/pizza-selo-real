import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const InicialOpcao = () => {
  return (
    <View>
      <TouchableOpacity onPress={() => console.log('Grande selecionado')}>
        <Text>Grande - R$30,00</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Médio selecionado')}>
        <Text>Médio - R$20,00</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Brotinho selecionado')}>
        <Text>Brotinho - R$10,00</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InicialOpcao;
