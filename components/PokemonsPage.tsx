import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { NoPokemons } from "./NoPokemons";
import { PatternPage } from "./PatternPage";

export const PokemonsPage = () => {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
  return <PatternPage title="Your pokemons" component={<NoPokemons />} />;
};
