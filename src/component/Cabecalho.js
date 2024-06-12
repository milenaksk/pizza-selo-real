import { useNavigation } from "@react-navigation/native";
import { View, Image, TouchableOpacity } from "react-native";

const Cabecalho = () => {
  const nav = useNavigation();

  const goLogin = () => {
    nav.navigate("Login");
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
      <TouchableOpacity onPress={(goLogin)}>
        <Image
          style={{ width: 32, height: 32 }}
          source={require("../../assets/contorno-da-seta-de-login.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Cabecalho;
