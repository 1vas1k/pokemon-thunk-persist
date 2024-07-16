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

interface IProps {
  image: string;
  numberInList: number;
  pokemonName: string;
}

export const PokemonItem = ({ image, numberInList, pokemonName }: IProps) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor={COLORS.LIGHT}
        style={styles.informationContainer}
        onPress={() => dispatch(setIsModalActive(true))}
      >
        <Image
          style={styles.infoImageStyled}
          source={require("../assets/info.svg")}
        />
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
    backgroundColor: COLORS.PRIMARY,
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
    backgroundColor: COLORS.LIGHT,
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
