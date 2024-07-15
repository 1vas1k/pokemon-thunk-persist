import { StyleSheet, View, TouchableHighlight, Text } from "react-native";
import { COLORS } from "../constants/colors";

interface IProps {
  handleClick: () => void;
  text: string;
}

export const ActionButton = ({ handleClick, text }: IProps) => {
  return (
    <TouchableHighlight
      underlayColor={COLORS.PRIMARY}
      style={styles.container}
      onPress={() => handleClick()}
    >
      <View>
        <Text style={styles.textStyle}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.DARK,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.LIGHT,
  },
  textStyle: {
    fontSize: 20,
    color: COLORS.DARK,
    fontFamily: "VariableFont",
  },
});
