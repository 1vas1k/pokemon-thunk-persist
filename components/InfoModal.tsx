import { StyleSheet, View, Text, Image, ActivityIndicator } from "react-native";
import { COLORS } from "../constants/colors";
import { BackImage } from "./BackImage";
import { useDispatch } from "react-redux";
import { setIsModalActive } from "../store/features/modalSlice";
import { AppDispatch, RootState } from "../store/store";
import { useSelector } from "react-redux";
import { IInfo } from "../store/features/pokemonInfoSlice";

export const InfoModal = () => {
  const dispatch = useDispatch<AppDispatch>();
  const info = useSelector<RootState, IInfo>((state) => state.pokemonInfo);
  return (
    <View style={styles.back}>
      <View style={styles.container}>
        {info.isLoading ? (
          <View style={styles.conteinerForLoader}>
            <ActivityIndicator size={70} color={COLORS.DARK} />
          </View>
        ) : (
          <View>
            <View style={styles.backContainer}>
              <BackImage
                handleClick={() => dispatch(setIsModalActive(false))}
              />
            </View>
            <View style={styles.introdutionContainer}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.imageStyled}
                  source={{ uri: info.image }}
                />
              </View>
              <View style={styles.introdutionContent}>
                <Text style={styles.introdutionText}>{info.name}</Text>
                <Text style={styles.introdutionText}>ID: {info.id}</Text>
                <Text style={styles.introdutionText}>
                  Types:{" "}
                  {info.types.map((item, index) => {
                    if (index + 1 !== info.types.length) {
                      return item + ", ";
                    }
                    return item;
                  })}
                </Text>
              </View>
            </View>
            <View style={styles.baseContainer}>
              <Text style={styles.baseText}>
                <Text style={styles.boldText}>Height:</Text> {info.height} m
              </Text>
              <Text style={styles.baseText}>
                <Text style={styles.boldText}>Width:</Text> {info.weight} kg
              </Text>
              <Text style={styles.baseText}>
                <Text style={styles.boldText}>Base exp:</Text> {info.baseExp} pt
              </Text>
            </View>
            <View style={styles.statsContainer}>
              <Text style={(styles.baseText, styles.boldText)}>Stats</Text>
              <Text style={styles.baseText}>HP: {info.hp}</Text>
              <Text style={styles.baseText}>ATTAK: {info.attack}</Text>
              <Text style={styles.baseText}>DEFENSE: {info.defense}</Text>
              <Text style={styles.baseText}>SPEED: {info.speed}</Text>
              <Text style={styles.baseText}>
                SPECIAL-ATTACK: {info.specialAttack}
              </Text>
              <Text style={styles.baseText}>
                SPECIAL-DEFENSE: {info.specialDefense}
              </Text>
            </View>
          </View>
        )}
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
  conteinerForLoader: {
    // paddingTop: 50,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
});
