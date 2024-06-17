import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { encontrarConta } from '../database/BaseDados';
import Global from '../Global';

const LoginButton = ({onPress}) => (
  <View style={styles.loginButtonContainer}>
    <Button title="ENTRAR" onPress={onPress} color="#8B0000"/>
  </View>
);

const CriarContaLink = ({onPress}) => (
  <View style={styles.linkContainer}>
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.linkText}>Não tenho uma conta</Text>
    </TouchableOpacity>
  </View>
);

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigation();

  const goCadastro = () => {
    nav.navigate("Cadastro");
  }

  const goInicial = () => {
    encontrarConta(email, password, (result) => {
      if (result == null) {
        Alert.alert("Usuario não encontrado.")
      } else {
        Alert.alert("Logado com sucesso.");
        Global.isLogged = true;
        nav.navigate("Inicial");
      }
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <LoginButton onPress={goInicial} />
      <CriarContaLink onPress={goCadastro} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 40,
    marginBottom: 33,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#8B0000',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#D3D3D3',
  },
  loginButtonContainer: {
    borderRadius: 10,
    padding: 10,
    overflow: 'hidden',
  },
  linkContainer: {
    marginTop: 10,
  },
  linkText: {
    marginTop: 10,
    color: '#8B0000',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
