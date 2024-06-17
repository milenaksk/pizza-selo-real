import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <text style={styles.endereçodeEntrega}> ENDEREÇO DE ENTREGA</text>
      
      <text style={styles.endereçodeEntregaCliente}> Av. Alfredo Baltazar da Silveira, 580
        - Recreio dos Bandeirantes 
      </text>

      <Text style={styles.formadepagamento}> FORMA DE PAGAMENTO </Text>
      <View styles={{ width: 60, height: 60}} >
        <Image source={require("../../assets/nubank.png")}>
        </Image>
      </View>

      <Text style={styles.total}> Total R$: </Text>

      <TouchableOpacity style ={ styles.button}>
        <Text style={styles.buttonText}>FINALIZAR O PEDIDO</Text>
      </TouchableOpacity>

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  endereçodeEntrega: {
    padddingTop: 20,
    paddingHorizontal: 20,
    textAlign: 'center',
    marginTop: 20,
    fontSize: 40,
    fontWeight: '600',
  },
  endereçodeEntregaCliente:{
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    fontWeight: '400'
  },
  pagamento: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 40,
    fontWeight: '600'
  },
  total: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 40,
    fontWeight: '600'
  },
  input:{
    backgroundColor:'#ffffff',
    borderWidth: 0.7,
    borderRadius: 12,
    bordercolor: 'd3d3d3',
    margin: 8, 
    padding: 16,
    fontSize: 20, 
  },

  button: {
    backgroundColor: '#8B0000',
    width: '80%', 
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,

  },

  },
  buttonText:{ 
    color:'#FFD700',
    fontSize: 20,
    justifyContent: 'center'
  },
});
