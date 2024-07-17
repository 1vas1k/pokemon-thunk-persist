import { Provider } from "react-redux";
import store, { persistor } from "./store/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainPage } from "./components/MainPage";
import { PokemonsPage } from "./components/PokemonsPage";
import { CatchingPage } from "./components/CatchingPage";
import { PersistGate } from "redux-persist/integration/react";

export type RootStackParamList = {
  MainPage: undefined;
  PokemonsPage: undefined;
  CatchingPage: undefined;
};
const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootStack.Navigator initialRouteName="MainPage">
            <RootStack.Screen
              name="MainPage"
              component={MainPage}
              options={{ headerShown: false }}
            />
            <RootStack.Screen
              name="PokemonsPage"
              component={PokemonsPage}
              options={{ headerShown: false }}
            />
            <RootStack.Screen
              name="CatchingPage"
              component={CatchingPage}
              options={{ headerShown: false }}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
