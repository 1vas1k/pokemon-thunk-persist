import { StyleSheet, View, Text, Image } from "react-native";
import { COLORS } from "../constants/colors";
import { BackImage } from "./BackImage";

export const InfoModal = () => {
  return (
    <View style={styles.back}>
      <View style={styles.container}>
        <View style={styles.backContainer}>
          <BackImage handleClick={() => console.log("Close modal")} />
        </View>
        <View style={styles.introdutionContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageStyled}
              source={require("../assets/pikachu.png")}
            />
            {/* <Image source={{uri: image}} /> */}
          </View>
          <View style={styles.introdutionContent}>
            <Text style={styles.introdutionText}>Polemon Name</Text>
            <Text style={styles.introdutionText}>ID: pokemonid</Text>
            <Text style={styles.introdutionText}>
              Types: pokemon types Types
            </Text>
          </View>
        </View>
        <View style={styles.baseContainer}>
          <Text style={styles.baseText}>
            <Text style={styles.boldText}>Height:</Text> 1.3 m
          </Text>
          <Text style={styles.baseText}>
            <Text style={styles.boldText}>Width:</Text> 402 kg
          </Text>
          <Text style={styles.baseText}>
            <Text style={styles.boldText}>Base exp:</Text> 100 pt
          </Text>
        </View>
        <View style={styles.statsContainer}>
          <Text style={(styles.baseText, styles.boldText)}>Stats</Text>
          <Text style={styles.baseText}>HP: </Text>
          <Text style={styles.baseText}>ATTAK: </Text>
          <Text style={styles.baseText}>DEFENSE: </Text>
          <Text style={styles.baseText}>SPEED: </Text>
          <Text style={styles.baseText}>SPECIAL-ATTACK: </Text>
          <Text style={styles.baseText}>SPECIAL-DEFENSE: </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    top: 0,
    left: 0,
    zIndex: 1,
    position: "absolute",
    backgroundColor: COLORS.DARK_OPAQUE,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "80%",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.DARK,
    backgroundColor: COLORS.PRIMARY,
  },
  backContainer: {
    width: "100%",
    marginBottom: 60,
  },
  introdutionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.DARK,
    backgroundColor: COLORS.LIGHT,
    marginRight: 10,
  },
  imageStyled: {
    height: 100,
    width: 100,
  },
  introdutionContent: {
    flex: 1,
    gap: 10,
    paddingVertical: 10,
  },
  introdutionText: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "VariableFont.ttf",
    color: COLORS.DARK,
    flexWrap: "wrap",
  },
  baseContainer: {
    paddingTop: 10,
    width: "100%",
    gap: 5,
    paddingBottom: 10,
  },
  baseText: {
    fontSize: 14,
    fontFamily: "VariableFont.ttf",
    color: COLORS.DARK,
  },
  boldText: {
    fontWeight: "bold",
  },
  statsContainer: {
    width: "100%",
    gap: 5,
  },
});
