import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
} from "react-native";
import { COLORS } from "../constants/colors";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { PokemonItem } from "./PokemonItem";
import { NoPokemons } from "./NoPokemons";

export const PokemonsPage = () => {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <TouchableHighlight
          style={styles.backContainer}
          underlayColor={COLORS.PRIMARY}
          onPress={() => navigate("MainPage")}
        >
          <Image
            style={styles.imsgeStyled}
            source={require("../assets/back.svg")}
          />
        </TouchableHighlight>
        <Text style={styles.titleStyled}>Your pokemons</Text>
      </View>
      <PokemonItem image={""} numberInList={0} pokemonName={"Bulbosaur"} />
      {/* <NoPokemons /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    alignItems: "center",
    padding: 10,
  },
  titleRow: {
    width: "100%",
    height: 50,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  backContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: 4,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.DARK,
    backgroundColor: COLORS.LIGHT,
  },
  imsgeStyled: {
    height: 40,
    width: 40,
  },
  titleStyled: {
    fontSize: 30,
    fontWeight: "bold",
    paddingVertical: 10,
    fontFamily: "VariableFont",
  },
});
