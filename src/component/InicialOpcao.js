import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { getProductData } from '../pizzas';  // Corrigido o caminho de importação

const InicialOpcao = () => {
  const nav = useNavigation();

  const handleNavigation = (id) => {
    const productData = getProductData(id);
    if (productData) {
      nav.navigate("Opcao", { productData });
    }
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => handleNavigation(1)}
      >
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Grande 40 cm</Text>
          <Text style={styles.subtitleText}>10 pedaços</Text>
        </View>
        <Text style={styles.priceText}>R$ 30,00</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => handleNavigation(2)}
      >
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Médio 30 cm</Text>
          <Text style={styles.subtitleText}>6 pedaços</Text>
        </View>
        <Text style={styles.priceText}>R$ 20,00</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => handleNavigation(3)}
      >
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Brotinho 20 cm</Text>
          <Text style={styles.subtitleText}>4 pedaços</Text>
        </View>
        <Text style={styles.priceText}>R$ 10,00</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    backgroundColor: '#e0e0e0',
    marginTop: 10,
    marginStart: 10,
    marginEnd: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderBottomColor: "#000",
    borderBottomWidth: 2,
  },
  textContainer: {
    padding: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitleText: {
    fontSize: 14,
    color: '#666',
  },
  priceText: {
    fontSize: 16,
    color: '#8B0000',
    textAlign: 'right',
    paddingRight: 10,
  },
});

export default InicialOpcao;
