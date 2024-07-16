import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { PokemonItem } from "./PokemonItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { COLORS } from "../constants/colors";
import { InfoModal } from "./InfoModal";

export interface IPokeItem {
  name: string;
  image: string;
}

export const CatchingContent = () => {
  const API_POKEMON = `https://pokeapi.co/api/v2/pokemon/`;
  const [pokemonsArr, setPokemonsArr] = useState<IPokeItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const getNumbers = (): number[] => {
    const numbers: Set<number> = new Set();
    while (numbers.size < 5) {
      const randomNumber = Math.floor(Math.random() * (151 - 0)) + 1;
      numbers.add(randomNumber);
    }
    return Array.from(numbers);
  };
  const fetchPokemons = async (numbers: number[]) => {
    const pokemons: IPokeItem[] = [];
    try {
      setIsLoading(true);
      for (let item of numbers) {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${item}`
        );
        const data = response.data;
        const pokemon: IPokeItem = {
          name: data.name,
          image: data.sprites.front_default,
        };
        pokemons.push(pokemon);
        // setPokemonsArr(pokemons);
        // console.log(pokemons);
        // console.log(pokemons);
      }
      //   console.log(pokemons);
      setIsLoading(false);
      return pokemons;
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      return pokemons;
    }
  };
  useEffect(() => {
    // console.log(getNumbers());
    const getArray = async () => {
      const arr = await fetchPokemons(getNumbers());
      console.log("arr in useEffect");
      console.log(arr);
      setPokemonsArr(arr);
    };
    getArray();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.conteinerForLoader}>
          <ActivityIndicator size={70} color={COLORS.DARK} />
        </View>
      ) : (
        pokemonsArr.map((item, index) => {
          return (
            <PokemonItem
              key={index}
              image={item.image}
              numberInList={index + 1}
              pokemonName={item.name}
            />
          );
        })
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  conteinerForLoader: {
    paddingTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
