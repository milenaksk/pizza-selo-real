import { ScrollView, Text, View } from "react-native";
import Pe from "../component/Pe";

const PagamentoScreen = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <Text>Pagamento</Text>
      </ScrollView>
      <Pe/>
    </View>
  );
};

export default PagamentoScreen;
