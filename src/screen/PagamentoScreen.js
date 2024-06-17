import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { CartContext } from '../component/CartContext';
import Pe from "../component/Pe";
import { useNavigation } from '@react-navigation/native';
import { getProductData } from '../pizzas';

const PagamentoScreen = () => {
  const { items, getTotalCost } = useContext(CartContext);
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigation = useNavigation();

  const handlePayment = () => {

    alert(`Pedido realizado com sucesso! Método de pagamento: ${paymentMethod}`);
    navigation.navigate('Inicial');
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text>{item.name} - {item.quantity}x</Text>
      <Text>R$ {(item.price * item.quantity).toFixed(2)}</Text>
    </View>
  );

  //método de pagamento, endereço de entrega e itens do carrinho
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pagamento</Text>

      <Text style={styles.sectionTitle}>Itens no Carrinho</Text>
      <FlatList
        data={items.map(item => ({ ...item, ...getProductData(item.id) }))}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id.toString()}
      />

      <Text style={styles.totalCost}>Total: R$ {getTotalCost().toFixed(2)}</Text>

  
      <Text style={styles.sectionTitle}>Método de Pagamento na entrega:</Text>
      <View style={styles.radioContainer}>
        <TouchableOpacity
          style={[styles.radioButton, paymentMethod === 'Dinheiro' && styles.selectedRadioButton]}
          onPress={() => setPaymentMethod('Dinheiro')}
        >
          <Text style={styles.radioButtonText}>Dinheiro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.radioButton, paymentMethod === 'Cartão' && styles.selectedRadioButton]}
          onPress={() => setPaymentMethod('Cartão')}
        >
          <Text style={styles.radioButtonText}>Cartão</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.radioButton, paymentMethod === 'PIX' && styles.selectedRadioButton]}
          onPress={() => setPaymentMethod('PIX')}
        >
          <Text style={styles.radioButtonText}>PIX</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
        <Text style={styles.paymentButtonText}>Finalizar Pagamento</Text>
      </TouchableOpacity>

      <Pe />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  totalCost: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  input: {
    height: 40,
    borderColor: '#8B0000',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#D3D3D3',
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  radioButton: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#8B0000',
  },
  selectedRadioButton: {
    backgroundColor: '#FFD700',
  },
  radioButtonText: {
    color: '#8B0000',
    fontSize: 16,
  },
  paymentButton: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  paymentButtonText: {
    color: '#8B0000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PagamentoScreen;
