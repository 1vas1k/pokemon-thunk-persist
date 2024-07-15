// import { Provider } from "react-redux";
import { Main } from "./components/Main";
// import store from "./store/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pokemons } from "./components/Pokemons";

export type RootStackParamList = {
  Main: undefined;
  Pokemons: undefined;
};
const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Main">
        <RootStack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Pokemons"
          component={Pokemons}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
    // </Provider>
  );
}
