import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const MenuBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer}>
        {/* Ícone do menu hamburguer */}
        <Image
          source={require('./assets/menu.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      
      {/* Logo do aplicativo */}
      <Image
        source={require('./assets/real.png')}
        style={styles.logo}
      />

      <TouchableOpacity style={styles.iconContainer}>
        {/* Ícone do carrinho */}
        <Image
          source={require('./assets/online-shopping.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8B0000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 60,
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#FFD700',
  },
  logo: {
    width: 100,
    height: 40, 
  },
});

export default MenuBar;
