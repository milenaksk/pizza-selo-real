import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MenuBar from './src/components/MenuBar';

export default function App() {
  return (
    <View style={styles.container}>

        {/* Barra de menu chataaaaaaaaaaaaaaaaaaa */}
      <MenuBar />


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
