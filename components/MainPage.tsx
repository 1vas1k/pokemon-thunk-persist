import { StyleSheet, View, Text, Image } from "react-native";
import { ActionButton } from "./ActionButton";
import { COLORS } from "../constants/colors";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../App";
import { StackNavigationProp } from "@react-navigation/stack";

export const MainPage = () => {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hello, 1vas1k</Text>
      <View style={styles.buttonContainer}>
        <ActionButton
          handleClick={() => navigate("CatchingPage")}
          text={"Cath more pokemons"}
        />
        <ActionButton
          handleClick={() => navigate("PokemonsPage")}
          text={"Show my pokemons"}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyled}
          source={require("../assets/pikachu.png")}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
  },
  textStyle: {
    fontSize: 30,
    fontWeight: "bold",
    paddingVertical: 10,
    fontFamily: "VariableFont",
  },
  buttonContainer: {
    width: "100%",
    gap: 20,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: 30,
  },
  imageStyled: {
    width: 300,
    height: 300,
  },
});
