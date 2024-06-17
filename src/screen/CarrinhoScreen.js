import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../component/CartContext';
import Pe from "../component/Pe";
import { getProductData } from '../pizzas'; //importar dados das pizzas

const CarrinhoScreen = () => {
  const { items, addOneToCart, removeOneFromCart, getTotalCost } = useContext(CartContext);
  const navigation = useNavigation();

  // ao clicar em finalizar pedido encaminhar para a tela de pagamento
  const handlePayment = () => {
    navigation.navigate('Pagamento');
  };

    //opcao para incrementar e decrementar os itens do carrinho. quando o item chega a zero sai do carrinho. mostra cada item no carrinho.
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item.name}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.button} onPress={() => removeOneFromCart(item.id)}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity style={styles.button} onPress={() => addOneToCart(item.id)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

    // inclui o preço total e envia para a tela de pagamento.
  return (
    <View style={styles.container}>
      <FlatList
        data={items.map(item => ({ ...item, ...getProductData(item.id) }))}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text style={styles.totalCostText}>Total: R$ {getTotalCost().toFixed(2)}</Text>
      <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
        <Text style={styles.paymentButtonText}>Finalizar pedido</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    marginHorizontal: 8,
  },
  button: {
    backgroundColor: '#8B0000',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  totalCostText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  paymentButton: {
    backgroundColor: '#8B0000',  // Cor vermelha fundo botão
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  paymentButtonText: {
    color: '#FFD700',  // Cor dourada txt
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CarrinhoScreen;
