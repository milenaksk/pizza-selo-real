import { Text, View } from "react-native";
import Banner from "../components/Banner";
import Options from "../components/Options";


const TelaInicial = () => {
  return (
    <View>
      <Banner></Banner>
      <Options></Options>
      <Text>Inicial</Text>
    </View>
  );
};

export default TelaInicial;
