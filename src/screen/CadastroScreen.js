import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App(){
  const [nome, setNome] = useState('');
  const [celular, setCelular] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [endereço, setEndereço] = useState('');
  const [numero , setNumero] = useState('');
  const [complemento , setComplemento] = useState('');
  const [bairro  , setBairro] = useState(''); 

  //  titulo do botão foi alterado para "CADASTRAR"
  const CadastrarButton = ({onPress}) => (
    <View style={styles.cadastroButtonContainer}>
      <Button title="CADASTRAR" onPress={onPress} color="#8B0000"/>
    </View>
  );
  

  return (
    <View style={styles.container}>
      <Text style={styles.cadastro}> Cadastro </Text>

      <TextInput
           style={styles.input}
           value={nome} 
           onChangeText={ (nome)=> setNome(nome)}
           placeholder='Nome Completo'
       />
       <TextInput
           style={styles.input}
           value={celular} 
           onChangeText={ (celular)=> setCelular(celular)}
           placeholder='(00) 00000-0000'
           keyboardType='numeric'
       />
       <TextInput
           style={styles.input}
           value={email} 
           onChangeText={ (email)=> setEmail(email)}
           placeholder='E-mail'
       />
       <TextInput
           style={styles.input}
           value={senha} 
           onChangeText={ (senha)=> setSenha(senha)}
           placeholder='Senha'
       />

      <TextInput
           style={styles.input}
           value={endereço} 
           onChangeText={ (endereço)=> setEndereço(endereço)}
           placeholder='Av. Alfredo Baltazar'
       /> 

        <TextInput
           style={styles.input}
           value={numero} 
           onChangeText={ (numero)=> setNumero(numero)}
           placeholder='Nº'
           keyboardType='numeric'
       /> 
       <TextInput
           style={styles.input}
           value={complemento} 
           onChangeText={ (complemento)=> setComplemento(complemento)}
           placeholder='Complemento'
           />

           <TextInput
           style={styles.input}
           value={bairro} 
           onChangeText={ (bairro)=> setBairro(bairro)}
           placeholder='Bairro'
           />

           <CadastrarButton onPress={() => console.log("lalala cadastro clicado")}/>

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', //alinhando...
  },
  cadastro:{
    textAlign: 'center',
    marginTop: 80,
    marginBottom: 50,
    fontSize: 20,
    fontWeight: '600',

  },
  input:{
    backgroundColor:'#ffffff',
    borderWidth: 0.7,
    borderColor: '#8B0000',
    borderRadius: 8,
    bordercolor: 'd3d3d3',
    margin: 8, 
    padding: 10,
    fontSize: 20,
    marginTop: 5,
    width: '80%',
  },
  cadastroButtonContainer: {
    backgroundColor: '#8B0000',
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20, 
  },
});
