import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const InicialBanner = () => {
  return (
    <View style={styles.bannerContainer}>
      <Text style={styles.bannerText}>Sua pizza favorita está aqui!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    flex: 1,
    backgroundColor: '#e0e0e0', // cor de fundo do banner
    marginTop: 10, // espaço de 10px abaixo da menubar
    marginStart: 10,
    marginEnd: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  bannerText: {
    color: '#8B0000', // cor do texto do banner 
    fontSize: 36, // tamanho da fonte
    textAlign: 'center', // centalizar texto
  },
});

export default InicialBanner;
