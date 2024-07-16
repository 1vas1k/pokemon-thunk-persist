import { PatternPage } from "./PatternPage";
import { CatchingContent } from "./CatchingContent";

export const CatchingPage = () => {
  return (
    // <InfoModal />
    <PatternPage title="Catch pokemons" component={<CatchingContent />} />
  );
};
