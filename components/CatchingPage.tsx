import { View } from "react-native";
import { PatternPage } from "./PatternPage";
import { CatchingContent } from "./CatchingContent";
import { PokeballAnimation } from "./PokeballAnimation";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { IInProgress } from "../store/features/inProgressSlice";
import { useEffect } from "react";

export const CatchingPage = () => {
  const { inProgress } = useSelector<RootState, IInProgress>(
    (state) => state.catchingProgress
  );
  useEffect(() => {
    console.log(inProgress);
  }, [inProgress]);
  return (
    <View style={{ height: "100%", width: "100%" }}>
      {inProgress && <PokeballAnimation />}
      <PatternPage title="Catch pokemons" component={<CatchingContent />} />
    </View>
  );
};
