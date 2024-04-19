import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MenuBar from './src/components/MenuBar';
import PizzaSizeButtons from './src/components/PizzaSizeButtons';

export default function App() {
  return (
    <View style={styles.container}>

        {/* Barra de menu chataaaaaaaaaaaaaaaaaaa */}
      <MenuBar />

       {/* Conteúdo Principal */}
      <PizzaSizeButtons />



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(217, 217, 217)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
