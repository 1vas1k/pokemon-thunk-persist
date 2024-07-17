import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { ICatchedPokemon } from "../store/features/catchSlice";
import { PokemonItem } from "./PokemonItem";
import { NoPokemons } from "./NoPokemons";

export const MyPokemonsContent = () => {
  const catchedPokemons = useSelector<RootState, ICatchedPokemon[]>(
    (state) => state.catch
  );
  return (
    <View style={styles.container}>
      {catchedPokemons.length > 0 ? (
        catchedPokemons.map((item, index) => {
          return (
            <PokemonItem
              key={index}
              image={item.image}
              numberInList={index + 1}
              pokemonName={item.name}
              isCatched={true}
            />
          );
        })
      ) : (
        <NoPokemons />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
