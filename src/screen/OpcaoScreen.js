import { ScrollView, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react"; //hook react Context
import { CartContext } from "../component/CartContext";
import Pe from "../component/Pe";

//adiciona as pizzas ao carrinho e mostra os detalhes
const OpcaoScreen = ({ route }) => {
  const { productData } = route.params;
  const nav = useNavigation();
  const { addOneToCart } = useContext(CartContext);

//adiciona item ao carrinho
  const handleAddToCart = () => {
    addOneToCart(productData.id);
    nav.navigate("Carrinho");
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={styles.optionContainer}>
          <Text style={styles.headerText}>{productData.name}</Text>
          <Text style={styles.detailText}>Detalhes: {productData.details}</Text>
          <TouchableOpacity 
            style={styles.button} 
            onPress={handleAddToCart}
          >
            <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Pe/>
    </View>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
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
  },
  headerText: {
    fontSize: 36,
    textAlign: "center",
  },
  detailText: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#8B0000",
    padding: 10,
    margin: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFD700",
    textAlign: "center",
    fontSize: 18,
  },
});

export default OpcaoScreen;
