import { ScrollView, Text, View } from "react-native";

import InicialBanner from "../component/InicialBanner";
import InicialOpcao from "../component/InicialOpcao";
import Pe from "../component/Pe";

const InicialScreen = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <InicialBanner/>
        <InicialOpcao/>
      </ScrollView>
      <Pe/>
    </View>
  )
};

export default InicialScreen;
