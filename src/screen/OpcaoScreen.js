import { TouchableOpacity, ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Pe from "../component/Pe";

const OpcaoScreen = () => {
  const nav = useNavigation();

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View>
          <View style={{
            backgroundColor: '#e0e0e0',
            marginTop: 10,
            marginStart: 10,
            marginEnd: 10,
            paddingBottom: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4
          }}>
            <Text style={{fontSize: 36, textAlign: "center"}}>Pizzas salgadas</Text>
            <TouchableOpacity style={{
              marginRight:40,
              marginLeft:40,
              marginTop:10,
              paddingTop:10,
              paddingBottom:10,
              backgroundColor:"#8B0000"
              }} onPress={() => nav.navigate("Carrinho")}>
                <Text style={{color: "#FFD700", textAlign: "center", fontSize: 36}}>Sabores</Text>
              </TouchableOpacity>
          </View>

          <View style={{
            backgroundColor: '#e0e0e0',
            marginTop: 10,
            marginStart: 10,
            marginEnd: 10,
            paddingBottom: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4
          }}>
            <Text style={{fontSize: 36, textAlign: "center"}}>Pizzas doces</Text>
            <TouchableOpacity style={{
              marginRight:40,
              marginLeft:40,
              marginTop:10,
              paddingTop:10,
              paddingBottom:10,
              backgroundColor:"#8B0000"
              }} onPress={() => nav.navigate("Carrinho")}>
                <Text style={{color: "#FFD700", textAlign: "center", fontSize: 36}}>Sabores</Text>
              </TouchableOpacity>
          </View>

          <View style={{
            backgroundColor: '#e0e0e0',
            marginTop: 10,
            marginStart: 10,
            marginEnd: 10,
            paddingBottom: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4
          }}>
            <Text style={{fontSize: 36, textAlign: "center"}}>Bebidas</Text>
            <TouchableOpacity style={{
              marginRight:40,
              marginLeft:40,
              marginTop:10,
              paddingTop:10,
              paddingBottom:10,
              backgroundColor:"#8B0000"
              }} onPress={() => nav.navigate("Carrinho")}>
                <Text style={{color: "#FFD700", textAlign: "center", fontSize: 36}}>Opções</Text>
              </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Pe/>
    </View>
  );
};

export default OpcaoScreen;
