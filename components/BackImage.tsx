import { StyleSheet, TouchableHighlight, Image } from "react-native";
import { COLORS } from "../constants/colors";

interface IProps {
  handleClick: () => void;
}

export const BackImage = ({ handleClick }: IProps) => {
  return (
    <TouchableHighlight
      style={styles.backContainer}
      underlayColor={COLORS.PRIMARY}
      onPress={() => handleClick()}
    >
      <Image
        style={styles.imsgeStyled}
        source={require("../assets/back.svg")}
      />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  backContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: 4,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.DARK,
    backgroundColor: COLORS.LIGHT,
  },
  imsgeStyled: {
    height: 40,
    width: 40,
  },
});
