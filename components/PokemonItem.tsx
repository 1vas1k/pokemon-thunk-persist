import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";
import { COLORS } from "../constants/colors";
import { useDispatch } from "react-redux";
import { setIsModalActive } from "../store/features/modalSlice";
import { getPokemonInfo } from "../store/features/pokemonInfoSlice";
import { AppDispatch } from "../store/store";
import { catchPokemon, ICatchedPokemon } from "../store/features/catchSlice";

interface IProps {
  image: string;
  numberInList: number;
  pokemonName: string;
  isCatched: boolean;
}

export const PokemonItem = ({
  image,
  numberInList,
  pokemonName,
  isCatched,
}: IProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleInfo = () => {
    dispatch(getPokemonInfo(pokemonName));
    dispatch(setIsModalActive(true));
  };
  const handleCatch = () => {
    const pokemonToCatch: ICatchedPokemon = {
      name: pokemonName,
      image: image,
      // id: 1
    };
    dispatch(catchPokemon(pokemonToCatch));
  };

  const handleFree = () => {
    console.log("Now this pokemon is free");
  };
  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor={COLORS.LIGHT}
        style={styles.informationContainer}
        onPress={() => handleInfo()}
      >
        <Image
          style={styles.infoImageStyled}
          source={require("../assets/info.svg")}
        />
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor={COLORS.PRIMARY}
        style={{
          position: "absolute",
          bottom: 5,
          right: 5,
          borderColor: COLORS.DARK,
          borderWidth: 1,
          borderRadius: 5,
          overflow: "hidden",
        }}
        onPress={() => (isCatched ? handleFree() : handleCatch())}
      >
        <View
          style={{
            padding: 5,
            backgroundColor: COLORS.LIGHT,
          }}
        >
          <Text>{isCatched ? "Free pokemon" : "Catch me"}</Text>
        </View>
      </TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.imageStyled} source={{ uri: image }} />
      </View>
      <Text style={styles.textStyled}>
        {numberInList}. {pokemonName}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.DARK,
    backgroundColor: COLORS.LIGHT,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  informationContainer: {
    position: "absolute",
    right: 10,
    top: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.DARK,
    padding: 2,
  },
  infoImageStyled: {
    height: 20,
    width: 20,
    color: "yellow",
  },
  imageContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.DARK,
    backgroundColor: COLORS.BG_LIGHT,
    margin: 10,
  },
  imageStyled: {
    width: 100,
    height: 100,
  },
  textStyled: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 10,
    fontFamily: "VariableFont",
  },
});
