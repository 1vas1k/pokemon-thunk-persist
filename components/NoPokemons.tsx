import { StyleSheet, View, Text, Image } from "react-native";

export const NoPokemons = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyled}
        source={require("../assets/sad-pikachu.png")}
      />
      <Text style={styles.titleStyled}>You do not have any pokemon yet...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  titleStyled: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "VariableFont",
  },
  imageStyled: {
    height: 200,
    width: 200,
  },
});
