import { Image, View } from "react-native";

const Pe = () => {  
  return (
    <View style={{
      height: 64,
      backgroundColor: "#8B0000",
      justifyContent: "top",
      alignItems: "center",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      padding: 10,
      gap: 16
    }}>
      <Image
          style={{ width: 32, height: 32, tintColor: "#FFD700" }}
          source={require("../../assets/instagram.png")}
        />
      <Image
          style={{ width: 32, height: 32, tintColor: "#FFD700" }}
          source={require("../../assets/facebook.png")}
        />
    </View>
  );
};

export default Pe;
