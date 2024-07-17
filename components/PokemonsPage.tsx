import { PatternPage } from "./PatternPage";
import { MyPokemonsContent } from "./MyPokemonsContent";

export const PokemonsPage = () => {
  return (
    <PatternPage title="Your pokemons" component={<MyPokemonsContent />} />
  );
};
