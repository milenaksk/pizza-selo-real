import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const InicialBanner = () => {
  return (
    <View style={styles.bannerContainer}>
      <Text style={styles.bannerText}>Escolha um tamanho</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    flex: 1,
    backgroundColor: '#e0e0e0', // cor de fundo do banner
    marginTop: 20, // espaço de 10px abaixo da menubar
    marginStart: 10,
    marginEnd: 10,
    elevation: 4, // Essa propriedade adiciona sombra no Android
  },
  bannerText: {
    fontWeight: 'bold',
    padding:20,
    color: '#8B0000', // cor do texto do banner 
    fontSize: 36, // tamanho da fonte
    textAlign: 'center', // centalizar texto
  },
});

export default InicialBanner;
