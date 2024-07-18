import { StyleSheet, View, Text } from "react-native";
import { COLORS } from "../constants/colors";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { InfoModal } from "./InfoModal";
import { BackImage } from "./BackImage";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { PokeballAnimation } from "./PokeballAnimation";

interface IProps {
  title: string;
  component: React.JSX.Element;
}

export const PatternPage = ({ title, component }: IProps) => {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
  const isActive = useSelector<RootState>((state) => state.modal.isModalActive);
  return (
    <View style={styles.container}>
      {isActive ? <InfoModal /> : <></>}
      <View style={styles.titleRow}>
        <BackImage handleClick={() => navigate("MainPage")} />
        <Text style={styles.titleStyled}>{title}</Text>
      </View>
      {component}
      {/* <PokeballAnimation /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    alignItems: "center",
    padding: 10,
  },
  titleRow: {
    width: "100%",
    height: 50,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  titleStyled: {
    fontSize: 30,
    fontWeight: "bold",
    paddingVertical: 10,
    fontFamily: "VariableFont",
  },
});
