import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from 'react-native';

const InicialOpcao = () => {
  const nav = useNavigation();

  return (
    <View>
      <TouchableOpacity style={{
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
            elevation: 4,
            borderBottomColor: "#000",
            borderBottomWidth: 2
          }} onPress={() => nav.navigate("Opcao")}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <View>
                <Text style={{fontSize: 36, textAlign: "left"}}>Grande 40 cm</Text>
                <Text style={{fontSize: 26}}>10 pedaços</Text>
              </View>
              <Text style={{fontSize: 30, justifyContent: "center"}}>R$ 30,00</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{
            backgroundColor: '#e0e0e0',
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
            elevation: 4,
            borderBottomColor: "#000",
            borderBottomWidth: 2
          }} onPress={() => nav.navigate("Opcao")}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <View>
                <Text style={{fontSize: 36, textAlign: "left"}}>Médio 30 cm</Text>
                <Text style={{fontSize: 26}}>6 pedaços</Text>
              </View>
              <Text style={{fontSize: 30, justifyContent: "center"}}>R$ 20,00</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{
            backgroundColor: '#e0e0e0',
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
            elevation: 4,
            borderBottomColor: "#000",
            borderBottomWidth: 2
          }} onPress={() => nav.navigate("Opcao")}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <View>
                <Text style={{fontSize: 36, textAlign: "left"}}>Brotinho 20 cm</Text>
                <Text style={{fontSize: 26}}>4 pedaços</Text>
              </View>
              <Text style={{fontSize: 30, justifyContent: "center"}}>R$ 10,00</Text>
            </View>
          </TouchableOpacity>
    </View>
  );
};

export default InicialOpcao;
