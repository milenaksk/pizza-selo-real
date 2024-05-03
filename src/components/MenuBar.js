const MenuBar = () => {
    return (
      <View style={styles.container}>
        <Image
          source={require('./../assets/real.png')}
          style={styles.logo}
        />
        <Image
          source={require('./../assets/menu.png')}
          style={styles.menuIcon}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#8B0000', // cor de fundo da barra de menu DARK RED
      paddingTop: 20, // ajuste para acomodar a barra de status
      paddingHorizontal: 15,
      width: '100%',
      height: 60,
      borderBottomWidth: 1,
      borderBottomColor: '#000', // cor da borda inferior
    },
    logo: {
      width: 25, // largura da logo
      height: 25, // altura da logo
      resizeMode: 'contain',
    },
    menuIcon: {
      width: 30, // largura do ícone do menu
      height: 30, // altura do ícone do menu
      resizeMode: 'contain',
    },
  });
  
  export default MenuBar;