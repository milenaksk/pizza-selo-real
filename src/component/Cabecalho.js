import { useNavigation } from "@react-navigation/native";
import { View, Image, TouchableOpacity, Alert } from "react-native";
import Global from "../Global";

const Cabecalho = () => {
  const nav = useNavigation();

  const botao = () => {
    if (Global.isLogged != undefined || !Global.isLogged) {
      nav.navigate("Login");
    } else {
      Alert.alert('Já esta logado.',);
    }
  }
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        width: "100%",
        marginTop: 8,
      }}
    >
      <Image
        style={{ width: 32, height: 32 }}
        source={require("./../../assets/menu.png")}
      />
      <Image
        style={{ width: 32, height: 32 }}
        source={require("../../assets/real.png")}
      />
      <TouchableOpacity onPress={(botao)}>
        <Image
          style={{ width: 32, height: 32 }}
          source={require("../../assets/contorno-da-seta-de-login.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Cabecalho;
