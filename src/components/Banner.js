import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Options = () => {
  return (
    <View style={styles.bannerContainer}>
      <Text style={styles.bannerText}>Sua pizza favorita está aqui!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    width: '60%', // largura ocupando 60% da tela
    backgroundColor: '#D9D9D9', // cor de fundo do banner
    marginTop: 5, // espaço de 5px abaixo da menubar
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  bannerText: {
    color: '#8B0000', // cor do texto do banner 
    fontSize: 16, // tamanho da fonte
  },
});

export default Options;
