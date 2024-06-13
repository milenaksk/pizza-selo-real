import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginButton = () => (
  <View style={styles.loginButtonContainer}>
    <Button title="ENTRAR" onPress={() => {}} color="#8B0000"/>
  </View>
);

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      <LoginButton></LoginButton>
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
    borderRadius: 5, // bordas arredondadas
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#D3D3D3',
  },
  loginButtonContainer: {
    borderRadius: 10,
    padding: 10,
    overflow: 'hidden', // bordas arredondadas
  },
});

export default LoginScreen;
